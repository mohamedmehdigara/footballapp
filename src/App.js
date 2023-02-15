import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Standings from "./components/Standings";
import Highlights from "./components/Highlights";
import Button from "./components/Button";
import Transfer from "./components/Transfer";
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useEffect } from "react";
import axios from "axios";
import App from "./App"
import { render } from "@testing-library/react";

const [league, setLeague] = React.useState();
const [id, setId] = React.useState('eng.1');
const [season, setseason] = React.useState('2022');
const [tournament, setTournament] = React.useState('Premier League');

useEffect(() =>{
    axios.get('https://api-football-standings.azharimm.site/leagues').then(res => {
        setLeague(res.data.data)
    }).catch(err =>{
        console.log(err)
    })
},[])
render()
  return (
    <>
    <Navigation />
    <Button /> 
    <Header />
    <Standings /> 
    <Transfer />
    <Highlights />
    </>
  );
  

export default App;