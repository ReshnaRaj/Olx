import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'
import Post from './store/PostContext';
import './App.css';
import { FirebaseContext } from './store/FirebaseContext'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext } from './store/FirebaseContext';

function App() {
  const{setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })

  })
  return (
    <div>
<Post>

      <Router>
        <Route  exact path='/'>
        <Home />
        </Route>
        <Route path='/signup'>
        <Signup />
        </Route>
        <Route path='/login'>
        <Login />
        </Route>
        <Route path='/create'>
        <Create />
        </Route>
        <Route path='/viewpost'>
        <ViewPost />
        </Route>
      </Router>
</Post>
      
    </div>
  );
}

export default App;
