import React, { Component, Fragment} from 'react';
import './App.css';
import Membre from './components/Membre'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>React App</h1>
       <Membre name='John' />
       <Membre name='Paul' />
       <Membre name='George' />
       <Membre name='Ringo' >
       <strong>the drummer</strong>
        </Membre>
      </div>
    );
  }
}

export default App;
