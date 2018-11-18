import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home.js';
//import Playlist from './src/playlist/components/playlist.js';
//import data from './src/api.json';
const app = document.getElementById('app')
// import ReactDom from 'react-dom';
//ReactDom.render(que voy a rendrizar, donde lo hare);
//render(<Media /> ,app);
//propiedades dinamicas
render(<Home/> ,app);