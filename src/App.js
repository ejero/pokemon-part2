import React, {useEffect, useState} from 'react';
import { Navigation } from './components/Navigation';
import { PokemonCard } from './components/PokemonCard';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Home}  from './routes/Home'


const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokemonList, setPokemonList] = useState([]);


  // Adding search query to console.log to check
  // console.log(pokemonList.filter(pokemonList => pokemonList.name.includes(query)));

  useEffect(() => {
    const fetchPokeApiData = async () => {
      // fetch pokemon data
      const pokeData = await fetch(pokeApi)
      // return data as json
      const pokeDataToJson = await pokeData.json();
      // set pokemon data array
      setPokemonList(pokeDataToJson.results);
    }

    // call the fetch function
    fetchPokeApiData();
  }, []);


  return (
    <div data-testid="app">
      <Navigation/>
      <Home pokemonList={pokemonList}/>
    </div>
  );
}

export { App };
