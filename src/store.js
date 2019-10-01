import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBdRGMOOsf8wFWWXlrHCDodwaOrje8McJk",
    authDomain: "clientpanel-5a8a3.firebaseapp.com",
    databaseURL: "https://clientpanel-5a8a3.firebaseio.com",
    projectId: "clientpanel-5a8a3",
    storageBucket: "clientpanel-5a8a3.appspot.com",
    messagingSenderId: "1070943255202",
}

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize firestore
const firestore = firebase.firestore()


// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase)
  )(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
  })

// initial state
const initialState = {}

// Create store with reducers
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__&&
    window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;
