import { Box, Container } from '@material-ui/core'
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import 'react-toggle/style.css' // for ES6 modules
import IntlProvider from '../../contexts/IntlContext'
import Footer from './Footer'
import { NavBar } from './NavBar'

const Layout: React.FC = ({ children }: any) => (
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
    render={(data) => (
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
        />
        <NavBar />
        <Box
          minHeight="calc(100vh - 64px)"
          display="flex"
          flexDirection="column"
        >
          <Container style={{ flex: 1 }}>{children}</Container>
          <Footer />
        </Box>
      </>
    )}
  />
)

export default Layout
