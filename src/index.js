import React from 'react';
//import ReactDOM from 'react-dom';
import { GifExpertApp } from './GifExpertApp';
import './index.css';


import {createRoot} from 'react-dom/client';



const divRoot = document.getElementById('root');
const root = createRoot(divRoot);
root.render( <GifExpertApp />);

