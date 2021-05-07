import { Container } from '@material-ui/core'
import React, { Component } from 'react'
import { BigLink } from '../components/common'
import Overview from '../components/content/Overview'
import Layout from '../components/Layout/MainLayout'
import { Translate } from '../wording'

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
