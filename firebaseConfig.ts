import admin from "firebase-admin";

const firebasePrivateKey = process.env.FIREBASE_PRIVATE_KEY || "hardcoded-private-key";
const firebaseClientEmail = process.env.FIREBASE_CLIENT_EMAIL || "demo@example.com";
const firebaseProjectId = process.env.FIREBASE_PROJECT_ID || "demo-project-id";

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: firebaseProjectId,
    clientEmail: firebaseClientEmail,
    privateKey: firebasePrivateKey
  })
});

export default admin;