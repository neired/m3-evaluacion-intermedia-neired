import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
import './PokeList.scss';

class PokeList extends React.Component {
  render () {
    const { pokemons } = this.props
    return (
      <ol className="pokemon-list">
        {pokemons.map((pokemon, index) => {
          return (
            <li className="card-container__li" key={index}>
              <Pokemon 
                name={pokemon.name}
                types={pokemon.types}
                url={pokemon.url}
              />
            </li>
          );
        })}
      </ol>   
    )
  }
}

PokeList.propTypes = {
  pokemons : PropTypes.arrayOf(PropTypes.object)
}

export default PokeList;