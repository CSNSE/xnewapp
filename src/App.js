import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {EventCardCollection, EventCreateForm, Navbar} from "./ui-components";
import {Routes, Route} from 'react-router-dom'

class App extends Component {

  render() {
  return (
    <div className="App"><header className="App-header">
<Routes>
<Route exact path='/' element= {<div><Navbar  style={{'margin-bottom': '20px'}}/><EventCardCollection/></div>} />
<Route exact path='/new' element= {<div><Navbar style={{'margin-bottom': '20px'}}/><EventCreateForm/></div>} />
<Route path='/edit/' element= {<div><Navbar style={{'margin-bottom': '20px'}}/></div>} />
</Routes>
</header></div>


    );
  
}

}

export default withAuthenticator(App);