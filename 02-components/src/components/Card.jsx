import React from 'react'

const Card = () => {
  const user = "Aman yadav"
  return (
    <div>
      <div className="card">
        <h1>Hello {user}</h1>
        <p>ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  )
}

export default Card