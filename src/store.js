import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import notifyReducers from './reducers/notifyReducers';
import settingsReducer from './reducers/settingsReducer';

require('dotenv').config()

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
}

// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize firestore
// const firestore = firebase.firestore()
// const settings = {timestampsInSnapshots: true}
// firestore.settings(settings);


// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase)
  )(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    notify: notifyReducers,
    settings: settingsReducer
  })

  // check for sttings in LocalStorage

  if(localStorage.getItem('settings') === null) {

    const defaultSettings = {
      disabledBalanceOnAdd: true,
      disabledBalanceOnEdit: false,
      allowRegistration: false,
    }
    localStorage.setItem('settings', JSON.stringify(defaultSettings));
  }

// initial state
const initialState = {settings: JSON.parse(localStorage.getItem('settings'))}

// Create store with reducers
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__&&
    window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;
