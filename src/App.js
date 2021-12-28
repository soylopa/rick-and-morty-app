import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import CharactersList from './components/Characters-list';

require("es6-promise").polyfill();
require("isomorphic-fetch");



function App() {
  const [characters, setCharacters] = useState ([]); 
  function search (rows) {
    return rows.filter(
    (row) => 
      row.id.toLowerCase().indexof(characters) > -1 )
  }
  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fetchCharacters = (url) => { 
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch (error => console.log(error))
  };
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])
  return (
    <>
      <Navbar brand="Rick and Morty NFT"/>
      <input placeholder="search by filter" type="text" value={characters} onChange={(e) => setCharacters(e.target.value)}/>
      <Header title="Characters"/>
      <CharactersList characters = {search(characters)}/>
    </>
  );
}

export default App;
