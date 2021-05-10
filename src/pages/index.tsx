import { Container } from '@material-ui/core'
import React, { Component } from 'react'
import Overview from '../components/content/Overview'
import MainLayout from '../components/layout/MainLayout'
import IntlProvider from '../contexts/IntlContext'

class IndexPage extends Component {
  render() {
    return (
      <IntlProvider>
        <MainLayout>
          <Container>
            <Overview />
          </Container>
        </MainLayout>
      </IntlProvider>
    )
  }
}
export default IndexPage
