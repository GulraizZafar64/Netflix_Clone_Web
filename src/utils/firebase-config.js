import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZY6b05TF6epuleUw-m0_boSmJvueIAVw",
  authDomain: "test-7ea4d.firebaseapp.com",
  databaseURL: "https://test-7ea4d-default-rtdb.firebaseio.com",
  projectId: "test-7ea4d",
  storageBucket: "test-7ea4d.appspot.com",
  messagingSenderId: "307787215685",
  appId: "1:307787215685:web:bebcb2f411d375ae2ac42c"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
