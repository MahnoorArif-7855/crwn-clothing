import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config ={
    apiKey: "AIzaSyDInASI2AvnlNrtqyWVuSMkOg7ew_L_W7U",
    authDomain: "crwn-db-4dbd8.firebaseapp.com",
    projectId: "crwn-db-4dbd8",
    storageBucket: "crwn-db-4dbd8.appspot.com",
    messagingSenderId: "465945918333",
    appId: "1:465945918333:web:bd298a348d2c41d038ea14",
    measurementId: "G-PD8GH9D62Z"
  };

  export const createUserProfileDocument= async (userAuth, additionalData)=> {
    if(!userAuth)  return;

    const userRef = firestore.doc(`users/${userAuth.uid }`)

    const snapShot = await userRef.get()

    if(!snapShot.exists){
      const { displayName, email } = userAuth
      const createdAt= new Date()
        

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log("error created user", error.message)
      }
  }
  return userRef
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore= firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: "select_account"})
export const SigInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase