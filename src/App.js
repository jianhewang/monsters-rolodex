import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  constructor(){
    // call method from component class
    super();

    this.state = {
      monsters: [],
      searchFiled: ''
    }

    // define the context
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({ searchFiled: e.target.value})
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => 
        response.json()
      )
    .then(users => this.setState({monsters: users}))
  }
  
  render(){
    // deconstruct the state array
    const { monsters, searchFiled } = this.state;
    // filter the data in the array with the search term
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
      );

    return(
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange} />
        {/* <input 
          type='search' 
          placeholder='search monsters' 
          // call the render function at change
          onChange={e => {
            this.setState({ searchFiled: e.target.value}, 
              () => console.log(this.state)
              );
          }} /> */}
        <CardList monsters={filteredMonsters}>
          
        </CardList>
      </div>
    )
  }

  // render(){
  //   return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         {this.state.string}
  //       </p>
  //       <button onClick={() => this.setState({ string: 'Hello'})}>Change Text</button>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  // }
}

export default App;
