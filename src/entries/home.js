import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home.js';
import data from '../api.json';
//import Playlist from './src/playlist/components/playlist.js';
//import data from './src/api.json';
const homeContainer = document.getElementById('home-container')
// import ReactDom from 'react-dom';
//ReactDom.render(que voy a rendrizar, donde lo hare);
//render(<Media /> ,app);
//propiedades dinamicas
render(<Home data={data} /> ,homeContainer);
