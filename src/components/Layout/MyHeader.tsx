import { graphql, StaticQuery } from 'gatsby'
import React, { useContext } from 'react'
import { Container } from 'reactstrap'
import { filterByLang, IntlContext } from '../../intl/IntlContext'
import ThemeToggle from '../togglers/ThemeToggle'

const Header: React.FC = ({ children }) => {
  const { lang } = useContext(IntlContext)

  return (
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
        const nodes = data.allContentfulDescription.edges.map(
          ({ node }) => node
        )

        return <DescriptionDisplay content={nodes} />
      }}
    />
  )
}

const DescriptionDisplay = ({ content }) => (
  <IntlContext.Consumer>
    {({ lang }) =>
      content.filter(filterByLang(lang)).map(({ name, job }) => (
        <div key={lang}>
          <Container>
            <HeaderFrame name={name} job={job} />
          </Container>
        </div>
      ))
    }
  </IntlContext.Consumer>
)

type HeaderProps = {
  name: string
  job: string
}

export const HeaderFrame: React.FC<HeaderProps> = ({ name, job }) => {
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
          <h1>{name}</h1>
          <h2>{job}</h2>
        </span>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
