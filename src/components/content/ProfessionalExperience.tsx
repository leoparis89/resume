/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import showdown from 'showdown'
import { graphql, StaticQuery } from 'gatsby'
import { IntlContext, filterByuLang } from '../../intl/IntlContext'
import { UpperCaseH3 } from '../common'

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
              role
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

  const endDisplay = end ? (
    <time>{`${end.split('-')[1]}/${end.split('-')[0]}`}</time>
  ) : (
    <span>{CURRENT[lang]}</span>
  )

  return (
    <span>
      <time>
        {sm}/{sy}
      </time>{' '}
      - {endDisplay}
    </span>
  )
}

const WorkDisplay = ({ content }) => {
  return (
    <IntlContext.Consumer>
      {({ lang }) => {
        return (
          <div>
            <UpperCaseH3>{WORK[lang]}</UpperCaseH3>
            {content.filter(filterByuLang(lang)).map(el => {
              const html =
                el.description && converter.makeHtml(el.description.description)

              return (
                <div key={el.company}>
                  <h4>
                    {el.company} - {el.role}
                  </h4>
                  <h5 style={{ marginTop: 0 }}>
                    {makeDate(el.startDate, el.endDate, lang)}
                  </h5>
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                  <h5 style={{ marginTop: 0 }}>Stack:</h5>
                  <ul
                    style={{ margin: 0 }}
                    css={css`
                      li {
                        display: inline;
                        font-style: italic;
                      }
                      li::after {
                        content: ' • ';
                      }
                      li:last-child:after {
                        content: '';
                      }
                    `}
                  >
                    {el.stack.map(s => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
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
