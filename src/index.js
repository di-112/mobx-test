import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import Parent from "./mobx/Parent";
//import Parent from "./context/Parent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Parent />
);
