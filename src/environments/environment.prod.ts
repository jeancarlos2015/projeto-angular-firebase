// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
  production: true
};

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
export const analytics = getAnalytics(app);
