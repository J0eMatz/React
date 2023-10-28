import React, { createContext, useState } from 'react';

import logo from '../../logo.svg';
import './App.css';
import Box from "../Box/box";
import Home from '../../pages/home';
import Episodes from "../../pages/episodes/index";
import Pokemones from "../../pages/pokemones"


export const GradesContext = createContext();

function App() {
  const [usersWithGrades, setUsersWithGrades] = useState([
    {
      name: 'pepe',
      grade: 10
    },
    {
      name: 'pablo',
      grade: 9
    }
  ]);

  const [activePage, setActivePage] = useState('pokemones');

  return (
    <GradesContext.Provider value={{ usersWithGrades, setUsersWithGrades }}>
      {
        activePage === 'home' ? <Home /> : <Pokemones />
      }
    </GradesContext.Provider>
  );
}

export default App;