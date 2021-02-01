import React from 'react'
import styled from 'react-emotion'

export const Header = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(to right, #f28af2 0, #0091d9 100%)',
        color: '#FBFFA7',
        padding: 10,
      }}
    >
      <h1>Lev Kowalski</h1>
      <h2>Software engineer</h2>
    </div>
  )
}

const MyLink = styled('a')({ display: 'block', fontSize: '2em' })
