import React, { Component } from 'react';

import './App.scss';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import ProjectsHistory from './components/ProjectsHistory/ProjectsHistory';
import Technologies from './components/Technologies/Technologies';
import Navigation from './containers/Navigation/Navigation';

class App extends Component {
  state = { page: 'home' };

  setPage = newPage => {
    this.setState({ page: newPage });
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="app">
        <Navigation handleClick={this.setPage} home={this.state.page === 'home' && true} />
        {this.state.page === 'home' ? (
          <>
            <Header first />
            <Technologies />
            <Projects handleClick={this.setPage} />
          </>
        ) : (
          <>
            <Header />
            <ProjectsHistory />
          </>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
