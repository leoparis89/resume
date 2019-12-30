import 'bootstrap/dist/css/bootstrap-grid.css'
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import 'react-toggle/style.css' // for ES6 modules
import IntlProvider from '../intl/IntlContext'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <IntlProvider>
          <Header />
          <div>
            {children}
            <Footer />
          </div>
        </IntlProvider>
      </>
    )}
  />
)

export default Layout
