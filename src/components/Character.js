// Write your Character component here
// Character.js

import React, { useState, useEffect } from 'react';

const Character = ({ character }) => {
  const [expanded, setExpanded] = useState(false);
  const [characterInfo, setCharacterInfo] = useState(null);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const fetchCharacterInfo = async () => {
      try {
        const response = await fetch(character.url);
        const data = await response.json();
        setCharacterInfo(data);
      } catch (error) {
        console.error('Error fetching character information:', error);
      }
    };

    if (expanded && !characterInfo) {
      fetchCharacterInfo();
    }
  }, [expanded, character.url, characterInfo]);

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
        {character.name}
      </button>
      {expanded && characterInfo && (
        <div className="character-details">
          <p>Height: {characterInfo.height}</p>
          <p>Mass: {characterInfo.mass}</p>
          <p>Hair Color: {characterInfo.hair_color}</p>
          <p>Skin Color: {characterInfo.skin_color}</p>
          <p>Eye Color: {characterInfo.eye_color}</p>
          <p>Birth Year: {characterInfo.birth_year}</p>
          <p>Gender: {characterInfo.gender}</p>
        </div>
      )}
    </div>
  );
};

export default Character;



  