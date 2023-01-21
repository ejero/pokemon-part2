import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home}  from './routes/Home'
import {PokemonDetails } from '../src/routes/PokemonDetails'

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokemonList, setPokemonList] = useState([]);



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
    <BrowserRouter>
      <div data-testid="app">
        <Navigation/>
        <Routes>
          <Route path="/" element ={ <Home pokemonList={pokemonList}/> } />
          <Route path="/:name" element={ <PokemonDetails /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export { App };
