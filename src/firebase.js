
import { initializeApp } from "firebase/app";

import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCxESp3SR4PawESg-dBxU1e7_Xjv_w-RhI",
    authDomain: "my-app-f8142.firebaseapp.com",
    projectId: "my-app-f8142",
    storageBucket: "my-app-f8142.appspot.com",
    messagingSenderId: "442898377131",
    appId: "1:442898377131:web:39313f1668186a76a28aee",
    measurementId: "G-7VTB74D330"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;