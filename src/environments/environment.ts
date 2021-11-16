import { getFirestore } from '@angular/fire/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'peppy-hangout-233323',
    appId: '1:153991955850:web:91bb7f868418dfc3c33473',
    databaseURL: 'https://peppy-hangout-233323-default-rtdb.firebaseio.com',
    storageBucket: 'peppy-hangout-233323.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyCqRtFQP5xvj8GPVtCJNbKcGp283LjCUjw',
    authDomain: 'peppy-hangout-233323.firebaseapp.com',
    messagingSenderId: '153991955850',
    measurementId: 'G-WPFHLFEFEL',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCqRtFQP5xvj8GPVtCJNbKcGp283LjCUjw",
  authDomain: "peppy-hangout-233323.firebaseapp.com",
  databaseURL: "https://peppy-hangout-233323-default-rtdb.firebaseio.com",
  projectId: "peppy-hangout-233323",
  storageBucket: "peppy-hangout-233323.appspot.com",
  messagingSenderId: "153991955850",
  appId: "1:153991955850:web:91bb7f868418dfc3c33473",
  measurementId: "G-WPFHLFEFEL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
