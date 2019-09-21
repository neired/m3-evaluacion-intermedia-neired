import React from 'react';
import PokeList from './components/PokeList';
import pokemons from './Pokemons';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons : pokemons,
      favs : []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    const clickedPokemon = parseInt(event.currentTarget.id);
    const newFav = pokemons.find(pokemon => pokemon.id === clickedPokemon);
    this.setState(prevState => {
      const newFavs = [...prevState.favs];
      const result = newFavs.findIndex(pokemon => pokemon.id === clickedPokemon);
      if (result < 0 ) {
        // Si no existe, adentro
        newFavs.push(newFav);
      } else {
        // Si existe en favs, lo borramos
        newFavs.splice(result,1);
      }
      return {
        favs: newFavs
      }
  });
}
  // deleteFav(event) {
  //   const showID = parseInt(event.currentTarget.getAttribute('data-id'));
    
  //   this.setState(prevState => {
  //     const newFavs = [...prevState.favs];
  //     const result = newFavs.findIndex(item => item.show.id === showID);
  //     newFavs.splice(result,1);

  //     localStorage.setItem('favs', JSON.stringify(newFavs));

  //     return {
  //       favs: newFavs
  //     }
  //   });
  // }

  render() {
    const { pokemons, favs } = this.state;
    return (
      <div className="App">
        <h1 className="main-title">Mi lista de pokemon</h1>
        <PokeList pokemons={pokemons} handleClick={this.handleClick} favs={favs}/>
      </div>
    );
  }
}

export default App;
