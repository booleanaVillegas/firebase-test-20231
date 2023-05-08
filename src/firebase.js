// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjub3JUawNfCOvZ_tplgvMMQygJnBFUJo",
    authDomain: "fir-prog-web-may8.firebaseapp.com",
    projectId: "fir-prog-web-may8",
    storageBucket: "fir-prog-web-may8.appspot.com",
    messagingSenderId: "818175036896",
    appId: "1:818175036896:web:6436634612f079a8d0af85"
};

// Initialize Firebase & firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getProdcuts() {

    const allProducts = []

    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        allProducts.push({...doc.data(), id: doc.id })
    });

    return allProducts
}