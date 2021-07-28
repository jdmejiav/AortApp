import React,{ Component } from "react";
import firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig  = {
  apiKey: "AIzaSyCrME3wTqY6llC_IfHarH2HHuKBb45P9-c",
  authDomain: "arteriapp-6965f.firebaseapp.com",
  projectId: "arteriapp-6965f",
  storageBucket: "arteriapp-6965f.appspot.com",
  messagingSenderId: "137063801744",
  appId: "1:137063801744:web:7b8f7804e211f394d88915",
  measurementId: "G-82ZN1P3Q5G",
};




export default class FireBaseApp extends Component{

  componentDidMount(){
    firebase.initializeApp(firebaseConfig);
  }

  render (){
    return(<></>)

  }

}

