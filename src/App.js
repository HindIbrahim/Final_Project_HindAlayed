
import './App.css';
import { Component } from "react";


import Home from "./Components/Home";



import { Switch, Route } from "react-router-dom"
import Login from './Components/Login';
import { ToastContainer } from 'react-toastify';

class App extends Component {



  render() {

    return (
      <>
        <ToastContainer />
        <Switch>

          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/Home">
            <Home />
          </Route>

        </Switch>





      </>
    );
  }
}

export default App;
