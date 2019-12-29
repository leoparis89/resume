import styled from '@emotion/styled'
import * as React from 'react'
import { Container } from 'reactstrap'
// import IntlToggle from './IntlToggle'
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
        <span style={{ marginTop: 45 }}>{/* <IntlToggle></IntlToggle> */}</span>
      </Wrapper>
    </Container>
  </header>
)

export default Header
