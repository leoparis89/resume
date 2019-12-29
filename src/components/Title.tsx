import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { filterByuLang, IntlContext } from '../intl/IntlContext'

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
      // const { city, email, github, linkedin } = (data as any).contentfulPersonalDetails
      const nodes = data.allContentfulDescription.edges.map(({ node }) => node)

      return <DescriptionDisplay content={nodes} />
    }}
  />
)

const DescriptionDisplay = ({ content }) => (
  <IntlContext.Consumer>
    {({ lang }) => (
      <div>
        {content.filter(filterByuLang(lang)).map(el => (
          <div>
            <h1>{el.name}</h1>
            <h2>{el.job}</h2>
          </div>
        ))}
      </div>
    )}
  </IntlContext.Consumer>
)

export default Title
