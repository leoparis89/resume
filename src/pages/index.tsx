import { Container } from '@material-ui/core'
import React, { Component } from 'react'
import Overview from '../components/content/Overview'
import Layout from '../components/Layout/MainLayout'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Overview />
        </Container>
      </Layout>
    )
  }
}
export default IndexPage
