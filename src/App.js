import React from 'react'
import AboutMe from './pages/AboutMe'

import GlobalStyle from './components/GlobalStyle'
import Nav from './components/Nav';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Detail from './pages/WorkDetails';


import { Switch, Route, useLocation } from 'react-router-dom';




//Animation
import {AnimatePresence} from 'framer-motion';
import Navbar from './components/burgerMenu/Navbar';






function App() {

const location = useLocation();
console.log(location)

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
              <AboutMe />
          </Route>

          <Route exact path="/work">
              <Work />
          </Route>

          <Route path="/work/:id">
            <Detail />
          </Route>

          

          <Route exact path="/contact">
              <Contact />
          </Route>

        
        </Switch>
      </AnimatePresence>
      
      
      
    </div>
  );
}

export default App;
