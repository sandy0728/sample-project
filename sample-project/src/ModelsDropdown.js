import logo from './logo.svg';
import './App.css';

import React, {useState, useEffect} from 'react';

function ModelsDropdown(){
    const [models,setModels] = useState ([]);

    useEffect( () => {
        
          async function getModels(){
          const response = await fetch('http://localhost:8000/api/models');
          const jsonData = await response.json();
          setModels(jsonData);
        }
        getModels();
    },[]);
    /* const mditems = modelData.length > 0 && modelData.map((item,i) =>{
         return(
         <option key = {i} value = {item.appointmentType}>{item.appointmentType}</option>
    
         )} ); */
    
    return (
  
      <div data-test="component-app">
       <h1>SampleProject!!!!</h1> 
       <body>
                    
         <form>
         
          <select>
            {models.map(model => (
              <option
                  key={model.appointmentType}
                  value={model.appointmentType}
              >
            {model.appointmentType}
          </option>
        ))}
        </select>
  
         </form>
       </body>
      </div>
    );
}

export default ModelsDropdown;
