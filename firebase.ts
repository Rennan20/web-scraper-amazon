import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiJWh5k-EAHCAIVz9ni8XMt2d2s2HO02A",

  authDomain: "web-scraper-6a9e2.firebaseapp.com",

  projectId: "web-scraper-6a9e2",

  storageBucket: "web-scraper-6a9e2.appspot.com",

  messagingSenderId: "127586870059",

  appId: "1:127586870059:web:09670877cc889fc6531b6e",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
