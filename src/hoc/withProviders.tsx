import React from 'react'
import Layout from '../components/layout/Layout'
import IntlProvider, { NodeLocale } from '../contexts/IntlProvider'

const Wrap = ({ children, lang = NodeLocale.EN }) => (
  <IntlProvider lang={lang}>
    <Layout>{children}</Layout>
  </IntlProvider>
)
export default Wrap
