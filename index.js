import React from 'react';
import { render } from 'react-dom';
import Playlist from './src/playlist/components/playlist.js';
import data from './src/api.json';
const app = document.getElementById('app')
// import ReactDom from 'react-dom';
//ReactDom.render(que voy a rendrizar, donde lo hare);
//render(<Media /> ,app);
//propiedades dinamicas
render(<Playlist data={data}/> ,app);