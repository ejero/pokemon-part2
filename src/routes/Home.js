import React, {useState} from 'react';
import { PokemonCard } from '../components/PokemonCard';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Home({pokemonList}) {
const [query, setQuery] = useState('');


// Event handler for input change
const handleChange = event => {
setQuery(event.target.value);
};


return (
<div data-testid="app">
    <InputGroup className="mb-3">
    <InputGroup.Text>Search</InputGroup.Text>
    <Form.Control aria-label="Search" onChange={handleChange} />
    </InputGroup>
    {pokemonList
    .filter(card => card.name.toLowerCase().includes(query.toLowerCase()))
    .map(card => (
        <PokemonCard key={card.name} url={card.url} name={card.name} />
    ))}
</div>
);
}

export { Home };
