import styled from '@emotion/styled'
import * as React from 'react'
import { Container } from 'reactstrap'
import LangToggle from './LangToggle'
import Title from './Title'
interface HeaderProps {}

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1em 0px',
})

const Header: React.FC<HeaderProps> = () => (
  <header>
    <Container>
      <Wrapper>
        <Title />
        <span style={{ marginTop: 5 }}>{<LangToggle />}</span>
      </Wrapper>
    </Container>
  </header>
)

export default Header
