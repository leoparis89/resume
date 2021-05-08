import { Container } from '@material-ui/core'
import React, { Component } from 'react'
import Overview from '../components/content/Overview'
import Layout from '../components/Layout/MainLayout'
import IntlProvider from '../contexts/IntlContext'

class IndexPage extends Component {
  render() {
    return (
      <IntlProvider>
        <Layout>
          <Container>
            <Overview />
          </Container>
        </Layout>
      </IntlProvider>
    )
  }
}
export default IndexPage
