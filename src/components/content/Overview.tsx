import React from 'react'
import showdown from 'showdown'
import { graphql, StaticQuery } from 'gatsby'
import {
  IntlContext,
  filterByLang,
  NodeLocale,
} from '../../contexts/IntlContext'
import { UpperCaseH3 } from '../common'

const converter = new showdown.Converter()

const Overview: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query overview {
        allContentfulOverview {
          edges {
            node {
              node_locale
              bio {
                bio
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { edges } = data.allContentfulOverview

      return <OverviewDisplay content={edges.map(({ node }) => node)} />
    }}
  />
)

const OverviewDisplay = ({ content }) => {
  return (
    <IntlContext.Consumer>
      {({ lang }) => {
        const html = converter.makeHtml(
          content.filter(filterByLang(lang))[0].bio.bio
        )

        return (
          <div>
            <UpperCaseH3>{OVERVIEW[lang]}</UpperCaseH3>
            {/* {html} */}
            <span dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        )
      }}
    </IntlContext.Consumer>
  )
}

const OVERVIEW = {
  [NodeLocale.FR]: 'à propos',
  [NodeLocale.EN]: 'overview',
}

export default Overview
