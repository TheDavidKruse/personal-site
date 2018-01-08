import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AboutMe from './components/main-content/aboutme/AboutMe';
import Projects from './components/main-content/projects/Projects';
import Resume from './components/main-content/resume/Resume';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Container fluid id='app' className="App">
          <Route path='/' component={Header}/>
          <Container>
            <Route exact path='/' component={AboutMe}/>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/resume' component={Resume}/>
          </Container>
          <Route path='/' component={Footer}/>
        </Container>
      </Router>

    );
  }
}

export default App;
