import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.scss';

class Pokemon extends React.Component {
  render () {
    const { url, name, types, id } = this.props

    return (
      <div className="card-container__div card" id={id}>
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