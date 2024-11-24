import React from 'react'
import NavBar from './components/NavBar';
import Card from './components/Card';

export default function App() {
  return (
    <div className='container'>
      <NavBar />
      <div className="cards_container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
