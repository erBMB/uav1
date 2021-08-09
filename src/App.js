import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer';
import NavMenu from './Components/NavMenu';
import Comitee from './Pages/Comitet';
import { Diplome } from './Pages/Diplome';
import {IS}  from './Pages/InvitedSpeakers';
import { Sections } from './Pages/Sectiuni';
import Sponsorii from './Pages/Sponsori';
//import {PS} from './Pages/PaginaDeStart';
import {Home1} from './Pages/Home';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/comitet">
          <Comitee/>
          </Route>
          <Route path="/sponsori">
          <Sponsorii/>
          </Route>
          <Route path="/diplome">
          <Diplome/>
          </Route>
          <Route path="/invitedSpeakers">
          <IS/>
          </Route>
          <Route path="/sectiuni">
          <Sections/>
          </Route>
          <Route path="/">
            <Home1 />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}
