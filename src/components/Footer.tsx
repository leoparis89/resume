import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
// import MyToggle from './MyToggle'

export default function Footer() {
  return (
    <footer
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '80px 0',
      }}
    >
      <div>Made with ♥ in Closure Labs® {new Date().getFullYear()}</div>
      <ThemeToggle />
    </footer>
  )
}
