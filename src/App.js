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

  handleChange = (event, i) => {
    const famille = {...this.state.famille}
    const name = event.target.value
    famille[i].name = name;
    this.setState({famille})
  };

  hideName = (i) => {
    const famille = {...this.state.famille}
    famille[i].name = ''
    this.setState({famille})
  };

  handleShowDescription = () => {
    const isShow = !this.state.isShow
    this.setState({isShow})
  }

  render() {
    const { famille } = this.state;

    let description = null
    if(this.state.isShow){
      description = <strong>The drummer</strong>
    }

    const liste = Object.keys(famille)
    .map(membre  => (
       <Membre 
       key={membre}
       handleChange={event => this.handleChange(event, membre)}
       hideName={() => this.hideName(membre)}
       age= {famille[membre].age} 
       name= {famille[membre].name} />
    ))

    

    return (
      <div className="App">
       <h1>React App</h1>
       {/* <input value={famille.membre1.name} onChange={this.handleChange} type='text' /> */}
       { liste }
      { description }
       <button onClick={this.handleShowDescription}>
         {this.state.isShow ? 'Hide' : 'Show'}
         </button>
        <Button GetAge={() => this.handleClick(2)} />
      </div>
    );
  }
}

export default App;
