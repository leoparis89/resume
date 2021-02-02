import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { Container } from 'reactstrap'
import { filterByLang, IntlContext } from '../../intl/IntlContext'
import ThemeToggle from '../togglers/ThemeToggle'

const Title: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query description {
        allContentfulDescription {
          edges {
            node {
              name
              job
              node_locale
            }
          }
        }
      }
    `}
    render={data => {
      const nodes = data.allContentfulDescription.edges.map(({ node }) => node)

      return <DescriptionDisplay content={nodes} />
    }}
  />
)

const DescriptionDisplay = ({ content }) => (
  <IntlContext.Consumer>
    {({ lang }) => (
      <div>
        {content.filter(filterByLang(lang)).map(el => (
          <div key={lang}>
            <h1>{el.name}</h1>
            <h2>{el.job}</h2>
          </div>
        ))}
      </div>
    )}
  </IntlContext.Consumer>
)

const Header: React.FC = () => (
  <Container>
    <HeaderFrame />
  </Container>
)

export default Header

export const HeaderFrame = () => {
  return (
    <header
      style={{
        background: 'linear-gradient(to right, #f28af2 0, #0091d9 100%)',
        color: '#FBFFA7',
        padding: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>
          <h1>Lev Kowalski</h1>
          <h2>Software engineer</h2>
        </span>
        <ThemeToggle />
      </div>
    </header>
  )
}
