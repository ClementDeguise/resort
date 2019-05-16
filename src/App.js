import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRooms from './pages/SingleRoom'
import Error from './pages/Error'

import Navbar from './components/Navbar'
import './App.css';

function App() {

/*
set up react router dom to navigate between pages
the router will match the first slash always, so home would be
on top of lets say, rooms if we do /rooms. So we add the exact props

the slug variable will be accessed by the single rooms component
to display variable route, according to the selected room
when there is a wrong path, we display error, so we use the switch component

https://reacttraining.com/react-router/web/guides/quick-start

Navbar will have to stay in every page so we put it here

*/

  return (

    <div>

      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRooms} />
        <Route component={Error} />
      </Switch>

   
    </div>
  );
}

export default App;
