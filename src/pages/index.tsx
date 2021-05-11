import { Container } from '@material-ui/core'
import React, { Component } from 'react'
import Overview from '../components/content/Overview'
import GOGO from '../components/bar/Foo'
import IntlProvider from '../contexts/IntlContext'

class IndexPage extends Component {
  render() {
    return (
      <IntlProvider>
        <GOGO>
          <Container>
            <Overview />
          </Container>
        </GOGO>
      </IntlProvider>
    )
  }
}
export default IndexPage
