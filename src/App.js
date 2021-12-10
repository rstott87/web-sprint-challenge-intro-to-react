import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const arrayCharacters = ["Jim", "Bob", "Tony"]

/*const listCharacters = characters.map((character) =>
  <li key={character.toString()}>
    {character.name}
  </li>
);*/

const Characters = styled.ul `
padding: 10px;
margin-left: 15%;
width: 70%;
`

const Character = styled.li `
margin-bottom:10px;
font-size: 30px;
background-color: white;
border: 10px double black;
list-style: none;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
  useEffect (()=>{
    axios
    .get("https://swapi.dev/api/people")
    .then(res => {
      console.log(res)
      setCharacters(res.data)})
    .catch(err => {console.log(err)})
  }, []);

  const listCharacters = characters.map((character) =>
  <Character className="characters" key={character.name.toString()}>
    {character.name}
  </Character>);
  
   
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters>{listCharacters}</Characters>
    </div>
  );
}

export default App;
