import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { NodeLocale, useLang } from '../../contexts/IntlContext'

function getNodes<T>(obj: any): T[] {
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

export const byLang = (lang: NodeLocale) => (node) => {
  return node.node_locale === lang
}
export const filterNodesByLang = (lang: NodeLocale) => (nodes: any[]) => {
  const result = nodes.filter(byLang(lang))

  return result[0]
}

const Header: React.FC = ({ children }) => {
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
      render={(data) => {
        const lang = useLang()
        const [props] = getNodes<HeaderProps>(data).filter(byLang(lang))

        return null
      }}
    />
  )
}

type HeaderProps = {
  name: string
  job: string
}
