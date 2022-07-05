import React from 'react'
import Layout from '../components/layout/Layout'
import IntlProvider, { NodeLocale } from '../contexts/IntlProvider'

const Wrap = ({ children, lang = NodeLocale.EN, noHeader = false }) => (
  <IntlProvider lang={lang}>
    <Layout noHeader={noHeader}>{children}</Layout>
  </IntlProvider>
)
export default Wrap
