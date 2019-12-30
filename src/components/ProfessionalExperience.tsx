import React from 'react'
import showdown from 'showdown'
import { graphql, StaticQuery } from 'gatsby'
import { IntlContext, filterByuLang } from '../intl/IntlContext'
import { MyH4 } from './common'

const converter = new showdown.Converter()
const Work: React.FC = () => (
  <StaticQuery
    query={graphql`
      query work {
        allContentfulJob(sort: { order: DESC, fields: [startDate] }) {
          edges {
            node {
              node_locale
              company
              startDate
              endDate
              stack
              description {
                description
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <WorkDisplay
          content={data.allContentfulJob.edges.map(({ node }) => node)}
        />
      )
    }}
  />
)

const makeDate = (start, end, lang) => {
  const [sy, sm] = start.split('-')

  const endDisplay = end
    ? `${end.split('-')[1]}/${end.split('-')[0]}`
    : CURRENT[lang]

  return `${sm}/${sy} - ${endDisplay}`
}

const WorkDisplay = ({ content }) => {
  return (
    <IntlContext.Consumer>
      {({ lang }) => {
        return (
          <div>
            <MyH4>{WORK[lang]}</MyH4>
            {content.filter(filterByuLang(lang)).map(el => {
              const html =
                el.description && converter.makeHtml(el.description.description)

              return (
                <div key={el.university}>
                  <h6>
                    {el.company} {makeDate(el.startDate, el.endDate, lang)}
                  </h6>
                  <div>
                    {/* {el.description.content.map(el => {
                      return <div>{el.content[0].value}</div>
                    })} */}
                    <span dangerouslySetInnerHTML={{ __html: html }} />
                  </div>
                  <div>
                    <h6>Stack:</h6>
                    <ul style={{ margin: 0 }}>
                      {el.stack.map(s => (
                        <li style={{ display: 'inline' }}>{s} // </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        )
      }}
    </IntlContext.Consumer>
  )
}

const WORK = {
  fr: 'Projets',
  en: 'Professional history',
}

const CURRENT = {
  fr: 'Actuel',
  en: 'Current',
}
export default Work
