import { Box, Container } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import 'react-toggle/style.css' // for ES6 modules
import { DarkLightThemeProvider } from '../../contexts/ThemeProvider'
import Footer from './Footer'
import { NavBar } from './NavBar'

const useSiteMetaData = () => {
  return useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
}

const Layout: React.FC = ({ children, noHeader }: any) => {
  const data = useSiteMetaData()

  return (
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
      <DarkLightThemeProvider>
        <NavBar noHeader={noHeader} />
        <Box
          minHeight="calc(100vh - 64px)"
          display="flex"
          flexDirection="column"
        >
          <Container style={{ flex: 1 }}>{children}</Container>
          {noHeader ? null : <Footer />}
        </Box>
      </DarkLightThemeProvider>
    </>
  )
}

export default Layout
