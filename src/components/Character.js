// Write your Character component here
// Character.js

import React, { useState } from 'react';

const Character = ({ character }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const buttonStyles = {
    padding: '0.5rem',
    backgroundColor: 'transparent',
    alignContent: 'center',
    justifyContent: 'center',
    border: '5px solid black',
    margin: '0.5rem',
  };

  const characterDetailsStyles = {
    display: expanded ? 'block' : 'none',
    margin: '1rem 0',
    backgroundColor: '#f2f2f2',
    padding: '1rem',
  };

  return (
    <div className="character-container">
      <button
        onClick={toggleExpanded}
        style={buttonStyles}
        className={`button ${expanded ? 'button-collapsed' : ''}`}
      >
        {character.name}
      </button>
      <div style={characterDetailsStyles} className="character-details">
        <p>Height: {character.height}</p>
        <p>Mass: {character.mass}</p>
        <p>Hair Color: {character.hair_color}</p>
        <p>Skin Color: {character.skin_color}</p>
        <p>Eye Color: {character.eye_color}</p>
        <p>Birth Year: {character.birth_year}</p>
        <p>Gender: {character.gender}</p>
      </div>
    </div>
  );
};

export default Character;

  