import React from 'react';
import './Pokemon.scss';

class Pokemon extends React.Component {
  render () {
    return (
      <div className="card-container__div">
        <div className="poke-img">
          <img src={this.props.url} alt={this.props.name}></img>
        </div>
        <h2 className="poke-name">{this.props.name}</h2>
        <ul className="poke-types">
          {this.props.types.map((type, index) => {
            return (
              <li className="poke-type" key={index}>{type}</li>
            );
          })}
        </ul>
      </div>
    )
  }
}

export default Pokemon;