import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "risu-app-bruh",
  // Add other config values as needed
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Test function to verify database connection
export async function testDatabaseConnection() {
  try {
    const docRef = await addDoc(collection(db, "test"), {
      message: "Test connection",
      timestamp: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
}
