import React from 'react'
// import MyToggle from './MyToggle'

export default function Footer() {
  return (
    <footer
      style={{ display: 'flex', justifyContent: 'center', margin: '80px 0' }}
    >
      Made with ♥ in Closure Labs® {new Date().getFullYear()}
      {/* <br />
      <MyToggle></MyToggle> */}
    </footer>
  )
}
