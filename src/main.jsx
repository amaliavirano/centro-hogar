import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQq2rEDEP-NnStzt0lx6B0X5kVnTEarcE",
  authDomain: "centro-hogar.firebaseapp.com",
  projectId: "centro-hogar",
  storageBucket: "centro-hogar.appspot.com",
  messagingSenderId: "222689192643",
  appId: "1:222689192643:web:6fa8d5dfff81321ebcd076"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ChakraProvider>
      <App />
    </ChakraProvider>
 
)
