import logo from './logo.svg';
import './App.css';

import React, {useState, useEffect} from 'react';
import './ModelsDropdown';
import ModelsDropdown from './ModelsDropdown';
//import { models } from './data';


function App() {
  
  return (

    <div data-test="component-app">
     <ModelsDropdown />
    </div>
  );
  }

export default App;
