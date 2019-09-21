import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
import './PokeList.scss';

class PokeList extends React.Component {
  render () {
    const { pokemons, handleClick } = this.props
    return (
      <ol className="pokemon-list">
        {pokemons.map(pokemon => {
          return (
            <li className="card-container__li" key={pokemon.id} id={pokemon.id} onClick={handleClick}>
              <Pokemon 
                name={pokemon.name}
                types={pokemon.types}
                url={pokemon.url}
                id={pokemon.id}
              />
            </li>
          );
        })}
      </ol>   
    )
  }
}

PokeList.propTypes = {
  pokemons : PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick : PropTypes.func.isRequired,
}

export default PokeList;