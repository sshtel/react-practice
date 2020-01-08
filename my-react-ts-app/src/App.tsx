import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import CardList from './components/card-list/card-list.component';
// import SearchBox from './components/search-box/search-box.component';

type AppState = { 
  name: string;
  monsters: any[];
};

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: 'No One',
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

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Hello {this.state.name}
          <button onClick={() => { this.setState({ name: 'Steve' })}}>click!</button>
        </header> */}

        <h1>Monsters Rolodex</h1>
        {/* <SearchBox onSearchChange={this.onS earchChange as any} /> */}
        <CardList monsters={this.state.monsters}>
        </CardList>

      </div>
    );
  }
}


export default App;
