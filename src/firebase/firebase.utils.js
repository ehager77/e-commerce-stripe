import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    
        apiKey: "AIzaSyCjHP2ipSeWYTQ6juMFP836tv20IyIm2jA",
        authDomain: "e-commerce-stripe.firebaseapp.com",
        databaseURL: "https://e-commerce-stripe.firebaseio.com",
        projectId: "e-commerce-stripe",
        storageBucket: "e-commerce-stripe.appspot.com",
        messagingSenderId: "586836983899",
        appId: "1:586836983899:web:c6861904622722e9"
};

export const createUserProfileDocument = async (userAuth, otherData) =>{
        // console.log(userAuth);
        if(!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();
        console.log(snapShot);
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
