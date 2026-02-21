import { getApps, initializeApp, cert, type App } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"
import { getFirestore } from "firebase-admin/firestore"

function getPrivateKey(): string | undefined {
  const key = process.env.FIREBASE_PRIVATE_KEY
  if (!key) return undefined
  return key.replace(/\\n/g, "\n")
}

function canInit() {
  return !!(process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY)
}

function initFirebaseAdmin(): App {
  if (getApps().length) return getApps()[0]!

  if (!canInit()) {
    throw new Error("Missing Firebase Admin env vars: FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY")
  }

  return initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID!,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
      privateKey: getPrivateKey()!,
    }),
  })
}

export function getFirebaseAdminApp() {
  return initFirebaseAdmin()
}

export function getFirebaseAdminAuth() {
  return getAuth(initFirebaseAdmin())
}

export function getFirebaseAdminDb() {
  return getFirestore(initFirebaseAdmin())
}
