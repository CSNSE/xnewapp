import React, { Component } from 'react'
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import {EventCardCollection, EventCreateForm} from "./ui-components";
import {Routes, Route} from 'react-router-dom'

class App extends Component {

  render() {
  return (
    <div className="App"><header className="App-header">
<Routes>
<Route exact path='/' element={<div><EventCardCollection/></div>} />
<Route exact path='/new' element= {<EventCreateForm/>} />
</Routes>
</header></div>


    );
  
}

}

export default withAuthenticator(App);