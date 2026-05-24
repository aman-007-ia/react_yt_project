import React from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';

const App = () => {
  const user = "Aman yadav"
  return (
    <>
        <Navbar />
        <Card />
        <Card />
    </>
  )
}

export default App