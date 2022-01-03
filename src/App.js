import React from "react";
import styled from "styled-components";
import AboutMe from "./pages/AboutMe";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Navbar/Nav";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Detail from "./pages/WorkDetails";
import { Switch, Route, useLocation } from "react-router-dom";

//Animation
import { AnimatePresence } from "framer-motion";
import { Network } from "./pages/Network";

import { useSelector, useDispatch } from "react-redux";
import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation();

  const menuOpen = useSelector((state) => state.layout.menuOpen);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <ScrollTop />
      <GlobalStyle />
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

          <Route path="/network">
            <Network />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  z-index: 44;
  background: ${(props) => (props.clicked ? "rgba(0, 0, 0, .90);" : "0")};
`;
