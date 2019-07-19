import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    
        apiKey: "AIzaSyCjHP2ipSeWYTQ6juMFP836tv20IyIm2jA",
        authDomain: "e-commerce-stripe.firebaseapp.com",
        databaseURL: "https://e-commerce-stripe.firebaseio.com",
        projectId: "e-commerce-stripe",
        storageBucket: "",
        messagingSenderId: "586836983899",
        appId: "1:586836983899:web:c6861904622722e9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
