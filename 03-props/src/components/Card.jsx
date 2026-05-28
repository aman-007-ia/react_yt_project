import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1777272106360-61bae1535c70?q=80&w=975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.user}</h1>
        <p>Age: {props.age}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, officiis!</p>
        <button>view profile</button>
    </div>
  )
}

export default Card