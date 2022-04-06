
import React, { useState } from 'react';
import './App.css';
import Layout_content from "./components/Layout_content"
import {StudenOverview} from "./components/StudenOverview"


const infoStudent = [
  {
    firstName: "Petru",
    secondName:"Cristea",
    gender:"male",
    age:21,
    height:200,
    univerity: "UTM",
    speciality:"RM",
  },
  {
    firstName: "Rusnac",
    secondName:"Sandu",
    gender:"male",
    age:13,
    height:30,
    univerity: "Hogwarts",
    speciality:"Slytherin",

  },
  {
    firstName: "Jimbei",
    secondName:"Alexandru",
    gender:"male",
    age:22,
    height:180,
    univerity: "UTM",
    speciality:"RM",
  }

]


function App() {

    const [cards, setCards] = useState([]);
    const [student, setStudent] = useState([]);
    
  return (
    <div className="App">
        <Layout_content
         setCards={setCards}
        cards = {cards}
        />

        <StudenOverview 
       
        students = {infoStudent}
        
        />




    </div>
  );
}

export default App;
