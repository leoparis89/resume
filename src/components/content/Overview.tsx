import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import showdown from 'showdown'
import { filterByLang, IntlContext } from '../../contexts/IntlContext'
import { Translate } from '../../wording'
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
    render={(data) => {
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
            <UpperCaseH3>{<Translate phrase="OVERVIEW" />}</UpperCaseH3>
            {/* {html} */}
            <span dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        )
      }}
    </IntlContext.Consumer>
  )
}

export default Overview
