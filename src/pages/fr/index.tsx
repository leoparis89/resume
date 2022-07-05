import React, { Component } from 'react'
import Overview from '../../components/content/Overview'
import Layout from '../../components/layout/Layout'
import IntlProvider, { NodeLocale } from '../../contexts/IntlProvider'

class IndexPage extends Component {
  render() {
    return (
      <IntlProvider lang={NodeLocale.FR}>
        <Layout>
          <Overview />
        </Layout>
      </IntlProvider>
    )
  }
}
export default IndexPage
