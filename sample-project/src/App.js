import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
//import { models } from './data';


function App() {
  const models = '[{"appointmentType" : "OPD","status" : "active"}, {"appointmentType" : "INP","status" : "active"}]';
  
  const [modelData] = useState (JSON.parse(models));
  const mditems = modelData.length > 0 && modelData.map((item,i) =>{
       return(
       <option key = {i} value = {item.appointmentType}>{item.appointmentType}</option>
  
       )} );
  
  return (

    <div data-test="component-app">
     <h1>Hello World!!!!</h1> 
     <body>
       
           
       <form>
         <select data-test="myselect" >
           <option>select a model</option>
           {mditems}
           
           
         </select>
       </form>
     </body>
    </div>
  );
}

export default App;
