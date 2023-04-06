import {FirebaseApp, initializeApp,FirebaseOptions, getApp, getApps} from "firebase/app"
import {Auth, getAuth} from "firebase/auth"
import {Firestore,getFirestore} from "firebase/firestore"
import {FirebaseStorage,getStorage} from "firebase/storage"

/* const FB_Options:FirebaseOptions = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId:  process.env.FIREBASE_PJ_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSEND_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

const firebase : FirebaseApp = !getApps().length ? initializeApp(FB_Options) : getApp()
const auth: Auth = getAuth(firebase)
auth.languageCode = "ja"
const firestore : Firestore = getFirestore()
const storage : FirebaseStorage = getStorage()

export {FB_Options,auth,firebase,firestore,storage} */