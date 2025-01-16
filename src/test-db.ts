import { testDatabaseConnection } from './firebase';

async function runTest() {
  console.log('Testing Firestore connection...');
  const isConnected = await testDatabaseConnection();
  if (isConnected) {
    console.log('Successfully connected to Firestore!');
  } else {
    console.log('Failed to connect to Firestore');
  }
}

runTest();
