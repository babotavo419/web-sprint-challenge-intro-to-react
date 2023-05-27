import { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character';


const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        setCharacters(response.data.results);

        console.log(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      {characters.map((character) => (
  <Character key={character.id} character={character} />
))}

    </div>
  );
};

export default App;



