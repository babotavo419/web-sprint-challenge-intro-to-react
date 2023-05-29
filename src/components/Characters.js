import React from 'react';
import styles from './Characters.module.css';

const Characters = ({ charactersData }) => {
  return (
    <div>
      {charactersData.map((character, index) => (
        <div key={index} className={styles.container}>
          <h2 className={styles.characterName}>{character.name}</h2>
          <p className={styles.characterInfo}>Height: {character.height}</p>
          <p className={styles.characterInfo}>Mass: {character.mass}</p>
          <p className={styles.characterInfo}>Hair color: {character.hair_color}</p>
          <p className={styles.characterInfo}>Skin color: {character.skin_color}</p>
        </div>
      ))}
    </div>
  );
};

export default Characters;

