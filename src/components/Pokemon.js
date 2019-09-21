import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.scss';
// import pokemons from '../Pokemons';

class Pokemon extends React.Component {
  isFav(pokemonID) {
    const {favs} = this.props;
    const result = favs.findIndex(pokemon => pokemon.id === pokemonID);
    if (result < 0 ) {
      return '';
    } else {
      return '-fav';
    }
  }

  render () {
    const { url, name, types, id } = this.props

    return (
      <div className={`card-container__div card${this.isFav(id)}`} id={id}>
        <div className="poke-img__div">
          <img className="poke-img" src={url} alt={name}></img>
        </div>
          <h2 className="poke-name">{name}</h2>
        <ul className="poke-types">
          {types.map((type, index) => {
            return (
              <li className="poke-type" key={index}>{type}</li>
            );
          })}
        </ul>
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Pokemon;