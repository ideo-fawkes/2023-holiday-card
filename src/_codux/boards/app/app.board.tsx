import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUbLmWnUiFUS1vHQPlN7_4SHCJ_-hZpFo",
  authDomain: "holiday-card-44f4f.firebaseapp.com",
  projectId: "holiday-card-44f4f",
  storageBucket: "holiday-card-44f4f.appspot.com",
  messagingSenderId: "391702954325",
  appId: "1:391702954325:web:4fbf948171cdea09d22fdc",
  measurementId: "G-G35HSQJ6DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1024
    }
});
