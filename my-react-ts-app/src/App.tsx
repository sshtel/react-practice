import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox  from './components/search-box/search-box.component';

type AppState = { 
  name: string;
  monsters: any[];
  searchField: string;
};

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: 'No One',
      searchField: '',
      monsters: [
        {
          name: 'Frankenstein',
          id: 'a'
        },
        {
          name: 'Dracula',
          id: 'b'
        }
      ]
    };

  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    })
    .then(users => {
      this.setState( { monsters: users })
    })
  }

  // handleChange = (e: any) => {
  //   this.setState({ searchField: e.target.value })
  // }

  handleChange = (e: any) => { // This should be written in arrow function! because arrow function keeps context of this object
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Hello {this.state.name}
          <button onClick={() => { this.setState({ name: 'Steve' })}}>click!</button>
        </header> */}

        <h1>Monsters Rolodex</h1>

        <SearchBox
          placeholder='search monsters'
          handleChange = {this.handleChange}
        />

        <CardList monsters={filteredMonsters}>
        </CardList>

      </div>
    );
  }
}


export default App;
