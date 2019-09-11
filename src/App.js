import React from 'react';
import PokeList from './components/PokeList';
import pokemons from './Pokemons';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons : pokemons
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="main-title">Mi lista de pokemon</h1>
        <PokeList pokemons={this.state.pokemons}/>
      </div>
    );
  }
}

export default App;
