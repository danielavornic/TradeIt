import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDPIBSH-hP_dL3b2smuxYWqVUffkJusJf0",
  authDomain: "tradeit-479fb.firebaseapp.com",
  projectId: "tradeit-479fb",
  storageBucket: "tradeit-479fb.appspot.com",
  messagingSenderId: "50864115695",
  appId: "1:50864115695:web:9bb7a022019ed62b96301a",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
const storageRef = ref(storage);
const imagesRef = ref(storage,'images');

export default app;
