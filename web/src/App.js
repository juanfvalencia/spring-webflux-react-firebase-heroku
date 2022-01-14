import React from 'react'
import React, { Fragment, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { login, logout } from './actions/authActions';

import { PublicNavbar, PrivateNavbar } from './components/Navbar'
import HomePage from './pages/HomePage'
import SingleQuestionPage from './pages/SingleQuestionPage'
import QuestionsPage from './pages/QuestionsPage'
import QuestionFormPage from './pages/QuestionFormPage'
import AnswerFormPage from './pages/AnswerFormPage'
import OwnerQuestionsPage from './pages/OwnerQuestionsPage'
import { useAuthState } from "react-firebase-hooks/auth"
import Footer from './components/Footer';
import { useDispatch } from 'react redux';

firebase.initializeApp({
  apiKey: "AIzaSyDZp-1WGvD5x1c0g_dAo2z_RNkuLUKE21g",
  authDomain: "questions-answers-sofka.firebaseapp.com",
  projectId: "questions-answers-sofka",
  storageBucket: "questions-answers-sofka.appspot.com",
  messagingSenderId: "821910269983",
  appId: "1:821910269983:web:b749313b9866acc780652a"
});

const auth = firebase.auth();

const App = () => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login(user?.email, user?.uid));
  }, [user])
  
  return (
    <Fragment>
    <Router>
      {user ?
        <>
          <PrivateNavbar />
          <Routes>
            <Route exact path="/" element={() => {
              return <HomePage><SignOut dispatch={dispatch} /></HomePage>
            }} />
            <Route exact path="/questions" element={QuestionsPage} />
            <Route exact path="/question/:id" element={SingleQuestionPage} />
            <Route exact path="/list" element={OwnerQuestionsPage} />
            <Route exact path="/answer/:id" element={AnswerFormPage} />
            <Route exact path="/new" element={QuestionFormPage} />
            <Route to="/" />
          </Routes>
        </> :
        <>
          <PublicNavbar />
          <Routes>
            <Route exact path="/" element={() => {
              return <HomePage><SignIn dispatch={dispatch} /></HomePage>
            }} />
            <Route exact path="/questions" element={QuestionsPage} />
            <Route exact path="/question/:id" element={SingleQuestionPage} />
            <Route exact path="/answer/:id" element={AnswerFormPage} />
            <Route to="/" />
          </Routes>
        </>
      }
    </Router>
    <Footer/>
    </Fragment>
  )
}


function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button className="button right" onClick={signInWithGoogle}>Sign in with google</button>;
}

function SignOut({ dispatch }) {
  return (
    auth.currentUser && (
      <button
        className="button right"
        onClick={() => {
          dispatch(logout())
          auth.signOut();
        }}
      >
        Sign out
      </button>
    )
  );
}


export default App
