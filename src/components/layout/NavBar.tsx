import { Box, Container } from '@material-ui/core'
import React from 'react'
import LangToggle from '../togglers/LangToggle'
import { ThemeToggle } from '../togglers/ThemeToggle'

export const NavBar: React.FC = (props) => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="flex-end"
        height={80}
        alignItems="center"
      >
        <LangToggle />
        <ThemeToggle />
      </Box>
    </Container>
  )
}
