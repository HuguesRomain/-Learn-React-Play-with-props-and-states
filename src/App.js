import React, { Component, Fragment} from 'react';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button'

const famille = {
  membre1: {
    name: 'John',
    age: 20
  },
  membre2: {
    name: 'Paul',
    age: 30
  },
  membre3: {
    name: 'George',
    age: 40
  },
  membre4: {
    name: 'Ringo',
    age: 50
  },
}

class App extends Component {
  state = {
    famille,
  }

  handleClick = () => {
    const famille = {...this.state.famille}
    famille.membre1.age =+ famille.membre1.age + 1 
    this.setState({famille})
  };
  
  render() {
    return (
      <div className="App">
       <h1>React App</h1>
       <Membre 
       age= {this.state.famille.membre1.age} 
       name= {this.state.famille.membre1.name} />
       <Membre 
       age={this.state.famille.membre2.age}
       name={this.state.famille.membre2.name} />
       <Membre 
       age={this.state.famille.membre3.age}
       name={this.state.famille.membre3.name} />
       <Membre 
       age={this.state.famille.membre4.age}
       name={this.state.famille.membre4.name} >
       <strong>the drummer</strong>
        </Membre>
        <Button GetAge={this.handleClick} />
      </div>
    );
  }
}

export default App;
