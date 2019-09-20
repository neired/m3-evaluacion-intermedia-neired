import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.scss';

class Pokemon extends React.Component {
  render () {
    const { url, name, types } = this.props

    return (
      <div className="card-container__div">
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
  name: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string),
  url: PropTypes.string
}

export default Pokemon;