// Write your Character component here
// Character.js

import React, { useState } from 'react';

const Character = ({ character }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="character-container">
      <button
        onClick={toggleExpanded}
        style={{
          padding: '0.5rem',
          backgroundColor: 'transparent',
          alignContent: 'center',
          justifyContent: 'center',
          border: '5px solid black',
          margin: '0.5rem',
        }}
        className={`button ${expanded ? 'button-collapsed' : ''}`}
      >
        <span>{character.name}</span>
      </button>
      {expanded && (
        <div className="character-details">
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          <p>Hair Color: {character.hair_color}</p>
          <p>Skin Color: {character.skin_color}</p>
          <p>Eye Color: {character.eye_color}</p>
          <p>Birth Year: {character.birth_year}</p>
          <p>Gender: {character.gender}</p>
        </div>
      )}
    </div>
  );
};

export default Character;


  