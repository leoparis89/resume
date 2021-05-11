import { Box, Container } from '@material-ui/core'
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import 'react-toggle/style.css' // for ES6 modules
import { DarkLightThemeProvider } from '../../contexts/DarkLight'
import Footer from './Footer'
import { NavBar } from './NavBar'

type Props = {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => (
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
        <DarkLightThemeProvider>
          <NavBar />
          <Box
            minHeight="calc(100vh - 64px)"
            display="flex"
            flexDirection="column"
          >
            <Container style={{ flex: 1 }}>{children}</Container>
            <Footer />
          </Box>
        </DarkLightThemeProvider>
      </>
    )}
  />
)

export default MainLayout
