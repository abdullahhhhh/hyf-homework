import React, { Component } from 'react';
import SearchGithubAPI from './githubSearch/SearchGithubAPI';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1> Search Github</h1>
        <SearchGithubAPI />
      </React.Fragment>
    );
  }
}

export default App;
