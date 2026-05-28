import React from 'react'
import Card from './components/Card';

const App = () => {
  return (
    <div className="parent">
      <Card user="Aman Yadav" age={25}/>
      <Card user="John Doe" age={26}/>
      <Card user="Jane Smith" age={27}/>
    </div>
  )
}

export default App