import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
// import 'firbase/compat/googleAuthProvider'
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAkFDDP-LZC9AZKYsfvNipVSrfDf76P6gg",
  authDomain: "visit-saint-peter.firebaseapp.com",
  projectId: "visit-saint-peter",
  storageBucket: "visit-saint-peter.appspot.com",
  messagingSenderId: "70254420636",
  appId: "1:70254420636:web:a091ce94457a91ab408359"
};

// needed because Next for some reason intializes it twice
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

/// Helper functions

/**
 * Gets a users/{uid} document with username
 * @param {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
