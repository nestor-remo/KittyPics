import React from 'react';
import { useState } from 'react'
import './App.css'
import APIForm from './components/APIForm';

function App() {

  return (
    <div className="App">
      <h1> Welcome To Kitty Pics! </h1>
      <p> Click the button below to see a random kitty pic! </p>
      <APIForm />
    </div>
  );
}

export default App
