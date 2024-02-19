import {useLocation, useNavigate} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import CustomNavbar from './nav';
import Game from './game'
import { gameData } from './data';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Login } from './Login';
import { Register } from './Signup';

import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Home (){
    const location=useLocation()

    const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('https://api.rawg.io/api/games', {
      params: {
        key: '4043cc05d708423396c45cc77c5c4985',
        ordering: '-added', // Optional: you can change the ordering based on your preference
        page_size: 100 // Optional: adjust the number of games per page
      }}) // Replace '/api/games' with your API endpoint to fetch the list of games
      .then(response => {
        console.log(response, 'games')
        setGames(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>

    <h1 className='main-head p-4'>Library</h1>

    <div className="game-list">{
      games.map((g, i) => (<Game className='col-3' key={i}  title={g.name} rating={g.rating} released={g.released} imgSrc={g.background_image}></Game>))
    }</div>
    </>
)}

export default Home