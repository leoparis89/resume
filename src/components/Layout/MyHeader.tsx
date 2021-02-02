import { graphql, StaticQuery } from 'gatsby'
import { prop } from 'ramda'
import React, { useContext } from 'react'
import { Container } from 'reactstrap'
import { IntlContext, NodeLocale } from '../../intl/IntlContext'
import ThemeToggle from '../togglers/ThemeToggle'

const getNodes = (name: string) => (data: any) =>
  data[name].edges.map(prop('node'))

export const byLang = (lang: NodeLocale) => node => {
  return node.node_locale === lang
}

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
      render={data => (
        <DescriptionDisplay
          content={getNodes('allContentfulDescription')(data).filter(
            byLang(lang)
          )}
        />
      )}
    />
  )
}

const DescriptionDisplay = ({ content }) => {
  const [{ name, job }] = content

  return <Container>{<HeaderFrame name={name} job={job} />}</Container>
}

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
