import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import CardList from './components/card-list/card-list-component'

import SearchBox from './components/search-box/search-box-component'

class App extends Component {
  constructor() {
    super();
    //https://jsonplaceholder.typicode.com/users

    this.state = {
      monsters: [],
      searchField: "",
    };
   // console.log("consructur-1");
  }
  
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
        )
      );
    //console.log("componenet-3");
  }

  onSearchChange =(event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState( () => {
        return { searchField };
      }
    );
  }
  render() {

    const{monsters,searchField}=this.state;

    const {onSearchChange}=this;

    const filterMonsters = monsters.filter((monster) => {
      return monster.name.includes(searchField);
    });

    return (
      <div className="App">
      <h1 className="app-title"> Monster Roledex </h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder='enter search key'  className='search-box' />

        <CardList monsters ={filterMonsters}/>
      </div>
    );
  }
}

export default App;
