import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYMYV1FAhRNENAGsn1GpxgZIZ_6eCvftI",
  authDomain: "trade-a95eb.firebaseapp.com",
  projectId: "trade-a95eb",
  storageBucket: "trade-a95eb.appspot.com",
  messagingSenderId: "655202702412",
  appId: "1:655202702412:web:eb9ed5d740f096f8cc50e9",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export default app;
