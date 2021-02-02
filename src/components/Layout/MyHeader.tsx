import { graphql, StaticQuery } from 'gatsby'
import { prop, compose, filter } from 'ramda'
import React, { useContext } from 'react'
import { Container } from 'reactstrap'
import { IntlContext, NodeLocale, useLang } from '../../intl/IntlContext'
import ThemeToggle from '../togglers/ThemeToggle'

const getNodes = (obj: any): any[] => {
  // tslint:disable-next-line:forin
  for (const key in obj) {
    if (key === 'nodes') {
      return obj[key]
    }

    if (typeof obj[key] === 'object') {
      return getNodes(obj[key])
    }
  }

  return []
}

export const byLang = (lang: NodeLocale) => node => {
  return node.node_locale === lang
}
export const filterNodesByLang = (lang: NodeLocale) => (nodes: any[]) => {
  const result = nodes.filter(byLang(lang))

  return result[0]
}

const withData = (query: TemplateStringsArray) => {}

const Header: React.FC = ({ children }) => {
  const lang = useLang()

  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allContentfulDescription {
            nodes {
              name
              node_locale
              job
            }
          }
        }
      `}
      render={data => {
        const [props] = getNodes(data).filter(byLang(lang))

        return <DescriptionDisplay {...props} />
      }}
    />
  )
}

const DescriptionDisplay = ({ name, job }) => {
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
