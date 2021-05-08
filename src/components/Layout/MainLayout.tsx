import { Container } from '@material-ui/core'
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import 'react-toggle/style.css' // for ES6 modules
import { DarkLight } from '../../contexts/DarkLight'
import Footer from './Footer'
import Header from './Header'
import { NavBar } from './NavBar'

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
    render={(data) => (
      <>
        {/* <Helmet
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
        </Helmet> */}
        <DarkLight>
          <NavBar />
          <Container>
            {/* <Header /> */}
            {children}
            <Footer />
          </Container>
        </DarkLight>
      </>
    )}
  />
)

export default Layout
