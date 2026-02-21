import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { getDoc, doc } from "firebase-admin/firestore"

import { getFirebaseAdminDb } from "@/lib/firebase/admin"
import { COLLECTIONS } from "@/lib/firebase/collections"

type FirebaseSignInResponse = {
  idToken: string
  localId: string
  email?: string
  displayName?: string
}

type FirebaseErrorResponse = {
  error?: {
    message?: string
  }
}

async function firebasePasswordSignIn(email: string, password: string): Promise<FirebaseSignInResponse> {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY
  if (!apiKey) {
    throw new Error("Missing NEXT_PUBLIC_FIREBASE_API_KEY")
  }

  const res = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, returnSecureToken: true }),
    },
  )

  if (!res.ok) {
    const data = (await res.json().catch(() => ({}))) as FirebaseErrorResponse
    const msg = data?.error?.message || "INVALID_LOGIN"
    throw new Error(msg)
  }

  return (await res.json()) as FirebaseSignInResponse
}

async function assertIsAdmin(uid: string) {
  const firebaseAdminDb = getFirebaseAdminDb()
  const ref = doc(firebaseAdminDb, COLLECTIONS.admins, uid)
  const snap = await getDoc(ref)
  if (!snap.exists()) {
    throw new Error("NOT_ADMIN")
  }
}

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email
        const password = credentials?.password
        if (!email || !password) return null

        const fb = await firebasePasswordSignIn(email, password)
        await assertIsAdmin(fb.localId)

        return {
          id: fb.localId,
          email: fb.email ?? email,
          name: fb.displayName ?? undefined,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.uid = (user as any).id
      }
      return token
    },
    async session({ session, token }) {
      ;(session as any).uid = token.uid
      return session
    },
  },
}
