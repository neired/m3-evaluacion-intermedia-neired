import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
import './PokeList.scss';

class PokeList extends React.Component {
  render () {
    return (
      <ul className="pokemon-list">
        {this.props.pokemons.map((pokemon, index) => {
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
      </ul>   
    )
  }
}

PokeList.propTypes = {
  pokemons : PropTypes.arrayOf(PropTypes.object)
}

export default PokeList;