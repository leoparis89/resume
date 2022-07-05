import React from 'react'
import { Resume } from '../../components/content/Resume'
import Layout from '../../components/layout/Layout'
import IntlProvider, { NodeLocale } from '../../contexts/IntlProvider'

const WorkPage = () => (
  <IntlProvider lang={NodeLocale.FR}>
    <Layout>
      <Resume />
    </Layout>
  </IntlProvider>
)

export default WorkPage
