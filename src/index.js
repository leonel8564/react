import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './style/style.scss';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhgSeHLhwvfmkyZYOVgiPq_I8fIIF78vE",
  authDomain: "proyecto-react-dbb22.firebaseapp.com",
  projectId: "proyecto-react-dbb22",
  storageBucket: "proyecto-react-dbb22.appspot.com",
  messagingSenderId: "980840125803",
  appId: "1:980840125803:web:4c0037910b7135d7ffe82e",
  measurementId: "G-63MQYXZK38"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
