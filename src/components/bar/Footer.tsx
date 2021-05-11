import React from 'react'
import LangToggle from '../togglers/LangToggle'
// import MyToggle from './MyToggle'
import Details from '../content/PersonalDetails'

export default function Footer() {
  return (
    <footer
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '40px 0',
        width: '100%',
      }}
    >
      <Details />
      <div>Made with Gatsby by Closure Labs® {new Date().getFullYear()}</div>
    </footer>
  )
}
