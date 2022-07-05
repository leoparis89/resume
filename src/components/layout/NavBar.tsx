import { Box, Container } from '@material-ui/core'
import React from 'react'
import LangToggle from '../togglers/LangToggle'
import { ThemeToggle } from '../togglers/ThemeToggle'

export const NavBar: React.FC<any> = (props) => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="flex-end"
        height={80}
        alignItems="center"
      >
        {props.noHeader ? null : (
          <>
            <LangToggle />
            <ThemeToggle />
          </>
        )}
      </Box>
    </Container>
  )
}
