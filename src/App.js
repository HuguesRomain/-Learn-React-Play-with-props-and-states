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
    isShow: false,
  }

  handleClick = (num) => {
    const famille = {...this.state.famille}
    famille.membre1.age =+ famille.membre1.age + num
    this.setState({famille})
  };

  handleChange = (event) => {
    const famille = {...this.state.famille}
    const name = event.target.value;
    famille.membre1.name = name;
    this.setState({famille})
  };

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({isShow})
  }

  render() {
    const { famille } = this.state;
    return (
      <div className="App">
       <h1>React App</h1>
       <input value={famille.membre1.name} onChange={this.handleChange} type='text' />
       <Membre 
       age= {famille.membre1.age} 
       name= {famille.membre1.name} />
       <Membre 
       age={famille.membre2.age}
       name={famille.membre2.name} />
       <Membre 
       age={famille.membre3.age}
       name={famille.membre3.name} />
       <Membre 
       age={famille.membre4.age}
       name={famille.membre4.name}>
       {
         this.state.isShow ? <strong>The drummer</strong> : null  
      }
       <button onClick={this.handleShowDescription}>
         {
         this.state.isShow ? 'Hide' : 'Show'
        }
         </button>
        </Membre>
        <Button GetAge={() => this.handleClick(2)} />
      </div>
    );
  }
}

export default App;
