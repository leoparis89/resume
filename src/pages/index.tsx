import React, { Component } from 'react'
import Overview from '../components/content/Overview'
import Layout from '../components/bar/Layout'

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
