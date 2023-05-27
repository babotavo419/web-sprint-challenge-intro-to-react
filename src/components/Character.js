// Write your Character component here
// Character.js

import React, { useState } from 'react';
import { Button, Collapse } from 'reactstrap';
import axios from 'axios';

const Character = ({ name }) => {
  const [expanded, setExpanded] = useState(false);
  const [characterDetails, setCharacterDetails] = useState(null);

  const fetchCharacterDetails = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?search=${name}`);
      const results = response.data.results;
      if (results.length > 0) {
        setCharacterDetails(results[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleExpanded = async () => {
    if (!expanded && !characterDetails) {
      await fetchCharacterDetails();
    }
    setExpanded(!expanded);
  };

  return (
    <div className="character-container">
      <Button
        onClick={toggleExpanded}
        style={{
          padding: '1rem',
          backgroundColor: 'transparent',
          alignContent: 'center',
          justifyContent: 'center',
          border: '2px solid black',
          margin: '1rem',
        }}
        className={`button ${expanded ? 'button-collapsed' : ''}`}
      >
        {name}
      </Button>
      <Collapse isOpen={expanded}>
        {characterDetails && (
          <div className="character-details">
            <p>Height: {characterDetails.height}</p>
            <p>Mass: {characterDetails.mass}</p>
            <p>Hair Color: {characterDetails.hair_color}</p>
            <p>Skin Color: {characterDetails.skin_color}</p>
            <p>Eye Color: {characterDetails.eye_color}</p>
            <p>Birth Year: {characterDetails.birth_year}</p>
            <p>Gender: {characterDetails.gender}</p>
          </div>
        )}
      </Collapse>
    </div>
  );
};

export default Character;





  