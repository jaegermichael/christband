import { getApps, initializeApp, cert, type App } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"
import { getFirestore } from "firebase-admin/firestore"

function getPrivateKey(): string {
  const key = process.env.FIREBASE_PRIVATE_KEY
  if (!key) return ""
  return key.replace(/\\n/g, "\n")
}

function initFirebaseAdmin(): App {
  if (getApps().length) return getApps()[0]!

  const projectId = process.env.FIREBASE_PROJECT_ID
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
  const privateKey = getPrivateKey()

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error("Missing Firebase Admin env vars: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY")
  }

  return initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  })
}

export const firebaseAdminApp = initFirebaseAdmin()
export const firebaseAdminAuth = getAuth(firebaseAdminApp)
export const firebaseAdminDb = getFirestore(firebaseAdminApp)
