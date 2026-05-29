import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h3>My App</h3>
        <button>Click me</button>
    </div>
  )
}

export default Header