
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state ={
      name: {firstName: 'Sarav',LastName: 'Parama'},
      com:'ICM',

    };

  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Hi, {this.state.name.LastName} {this.state.name.firstName}, I am working at {this.state.com}
          </p>
        <button onClick={()=>{

        this.setState(()=>{
          return{
            name:{firstName:'hello new name'}
          };

        },()=>{
          console.log(this.state)

        })
        console.log(this.state.name);

        }} >Change name</button>
        </header>
      </div>
    );
  }
 }

export default App;
