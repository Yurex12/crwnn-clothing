import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBqmlfuzLHhMSsyoB3LdKheZVZn_s8EgP4',
  authDomain: 'crwnn-clothing-db-51f1f.firebaseapp.com',
  projectId: 'crwnn-clothing-db-51f1f',
  storageBucket: 'crwnn-clothing-db-51f1f.appspot.com',
  messagingSenderId: '395933105215',
  appId: '1:395933105215:web:65e6bc6a3d447c33494c8a',
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        isAdmin: false,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating user: ', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export async function signOutAuthUser() {
  await signOut(auth);
}
export const onAuthStateChangedListener = async (callback) => {
  onAuthStateChanged(auth, callback);
};
