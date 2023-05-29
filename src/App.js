import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Characters from './components/Characters';

const App = () => {
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        if (response.data) {
          setCharactersData(response.data || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <Characters charactersData={charactersData} />
    </div>
  );
};

export default App;
