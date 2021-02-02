import 'bootstrap/dist/css/bootstrap-grid.css'
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import 'react-toggle/style.css' // for ES6 modules
import { Container } from 'reactstrap'
import IntlProvider from '../../intl/IntlContext'
import ThemeProvider from '../../intl/themeContext'
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
            {
              name: 'description',
              content: 'Lev Kowalski Curriculum Vitae',
            },
            {
              name: 'keywords',
              content: 'Lev Kowalski, Typscript, Node, React, Gatsby',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </>
    )}
  />
)

export default Layout
