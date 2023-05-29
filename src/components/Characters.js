import React from 'react';

const Characters = ({ charactersData }) => {
  return (
    <div>
      {charactersData.map((character, index) => (
        <div key={index}>
          <h2>{character.name}</h2>
          <p>{character.height}</p>
          <p>{character.mass}</p>
          <p>{character.hair_color}</p>
          <p>{character.skin_color}</p>
        </div>
      ))}
    </div>
  );
};

export default Characters;
