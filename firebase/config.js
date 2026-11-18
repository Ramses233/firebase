// firebase/config.js
import { Platform } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkMRmFREtsJNCc3fez3c-BubFZI07AYdo",
  authDomain: "fir-dfe10.firebaseapp.com",
  projectId: "fir-dfe10",
  storageBucket: "fir-dfe10.firebasestorage.app",
  messagingSenderId: "263805450492",
  appId: "1:263805450492:web:ce434f81dcaaf1ceb03f79",
  measurementId: "G-DWHSQ4NFZP"
};

const app = initializeApp(firebaseConfig);

// En el celular la sesión se guarda con AsyncStorage; en el navegador basta getAuth.
export const auth = Platform.OS === 'web'
  ? getAuth(app)
  : initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });

export const db = getFirestore(app);