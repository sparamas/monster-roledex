import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    //https://jsonplaceholder.typicode.com/users

    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("consructur-1");
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
    console.log("componenet-3");
  }

  onSearchChange =(event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState( () => {
        return { searchField };
      }
    );
  }
  render() {
    console.log("RENDER-2");

    const{monsters,searchField}=this.state;

    const {onSearchChange}=this;

    const filterMonsters = monsters.filter((monster) => {
      return monster.name.includes(searchField);
    });

    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="enter monster name" onChange={onSearchChange}></input>

        {filterMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name} </h1>;
        })}

      </div>
    );
  }
}

export default App;
