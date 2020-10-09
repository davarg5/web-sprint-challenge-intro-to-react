import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState('');

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`)
      .then(res => {
        setCharacters(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const AppScreen = styled.div`
    background-image: url('https://t4.ftcdn.net/jpg/02/22/57/71/360_F_222577191_ZqmuXPFqoc98ekpJlsCcI9MdLpOm49JU.jpg');
  `

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map( obj => {
        return <Character gender={obj.gender} hair_color={obj.hair_color} height={obj.height} mass={obj.mass} name={obj.name} skin_color={obj.skin_color}/>
      })}
    </div>
  );
}

export default App;
