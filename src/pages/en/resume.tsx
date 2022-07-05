import React from 'react'
import { Resume } from '../../components/content/Resume'
import Layout from '../../components/layout/Layout'
import IntlProvider from '../../contexts/IntlProvider'

const WorkPage = () => (
  <IntlProvider>
    <Layout>
      <Resume />
    </Layout>
  </IntlProvider>
)

export default WorkPage
