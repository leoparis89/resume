import { Divider, useTheme } from '@material-ui/core'
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import showdown from 'showdown'
import { filterByLang, IntlContext, useLang } from '../../contexts/IntlContext'
import { Translate } from '../../wording'
import { PageTitle } from '../common'

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
    render={(data) => {
      return (
        <WorkDisplay
          content={data.allContentfulJob.edges.map(({ node }) => node)}
        />
      )
    }}
  />
)

const WorkDisplay = ({ content }) => {
  const lang = useLang()

  const contentByLang = content.filter(filterByLang(lang))

  const { spacing } = useTheme()

  return (
    <>
      <PageTitle>
        <Translate phrase="WORK" />
      </PageTitle>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
        {contentByLang.map((el, i) => {
          const html =
            el.description && converter.makeHtml(el.description.description)

          return (
            <li
              key={el.company}
              style={{ marginBottom: spacing(5), marginTop: spacing(5) }}
            >
              <div>
                <h3>
                  {el.company} - {el.role}
                </h3>
                <h5 style={{ marginTop: 0 }}>
                  {makeDate(el.startDate, el.endDate)}
                </h5>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <h5 style={{ fontStyle: 'italic' }}>Stack:</h5>
                <ul style={{ margin: 0 }}>
                  {el.stack.map((s, j) => (
                    <li key={`${s}-${j}`}>{s}</li>
                  ))}
                </ul>
              </div>
              {i < contentByLang.length - 1 && (
                <Divider variant="middle" style={{ marginTop: spacing(5) }} />
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}

const makeDate = (start, end) => {
  const [sy, sm] = start.split('-')

  const endDisplay = end ? (
    <time>{`${end.split('-')[1]}/${end.split('-')[0]}`}</time>
  ) : (
    <span>
      <Translate phrase="CURRENT" />
    </span>
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

export default Work
