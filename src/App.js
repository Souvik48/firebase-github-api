import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css"

//react-router
import {BrowserRouter as BRouter,Switch,Route, Link} from "react-router-dom"

//toast
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css" //it's css

//firebase-->autoimport from signup.js
import firebase from "firebase/app" //modern one is import
//It is a good way to check npm if they have updated or not
import "firebase/auth" //package

//components

import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import PageNotFound from "./pages/PageNotFound"
import { UserContext } from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';
import FirebaseConfig from "./Config/FirebaseConfig"

//init firebase
firebase.initializeApp(FirebaseConfig)

//Converting to ES-6
const App = () => {

  const [user,setUser] = useState(null) //Create a user state
  //null means there is no user right now(logout)

  return (
    <BRouter>
     <ToastContainer/>
     <UserContext.Provider value= {{user,setUser}}>
     <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="*" component={PageNotFound} />
      </Switch>
      <Footer/>
     </UserContext.Provider>
    </BRouter>
  );
}

export default App;
