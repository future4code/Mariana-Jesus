import './App.css';
import React from 'react';
import AdminHome from './pages/AdminHomePage'
import Form from './pages/ApplicationFormPage'
import Create from './pages/CreateTripPage'
import Home from './pages/HomePage'
import List from './pages/ListTripsPage'
import Login from './pages/LoginPage'
import Details from './pages/TripDetailsPage'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import Header from './components/Header'





const GlobalStyle = createGlobalStyle`
  
    margin: 0;
    padding: 0;
  
`

function App() {
 

  return (
    <div>
    <GlobalStyle/>
    <Header/>
    <BrowserRouter>
    <Switch>
    

    <Route exact path={'/'}>
    <Home/>
    </Route>

    <Route exact path={'/trips/list'}>
    <List/>
    </Route>

    <Route exact path={'/trips/form'}>
    <Form/>
    </Route>

    <Route exact path={'/login'}>
    <Login/>
    </Route>

    <Route exact path={'/admin/trips/list'}>
    <AdminHome/>
    </Route>

    <Route exact path={'/admin/trips/create'}>
    <Create/>
    </Route>

    <Route exact path={'/admin/trips/:id'}>
    <Details/>
    </Route>
      
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
