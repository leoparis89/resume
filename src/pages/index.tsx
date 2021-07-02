import { Container } from '@material-ui/core'
import React, { Component } from 'react'
import Overview from '../components/content/Overview'
import Layout from '../components/Layout/Layout'
import IntlProvider from '../contexts/IntlContext'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Overview />
      </Layout>
    )
  }
}
export default IndexPage
