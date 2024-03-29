import { Divider, Typography, useTheme, Box } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import showdown from 'showdown'
import { useLang } from '../../contexts/IntlProvider'
import { filterByLang, Translate } from '../../wording'
import { PageTitle } from '../common'

const converter = new showdown.Converter()

const useAllContentfullJob = () => {
  return useStaticQuery(graphql`
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
  `)
}

const Experience = () => {
  const data = useAllContentfullJob()

  return (
    <ExperienceDisplay
      content={data.allContentfulJob.edges.map(({ node }) => node)}
    />
  )
}

const JobTitle = ({ company, role, startDate, endDate }) => {
  const { spacing, palette } = useTheme()

  return (
    <Box display="flex" justifyContent="space-between">
      <Box>
        <Typography
          variant="h4"
          style={{ marginBottom: spacing(2), fontWeight: 'bold' }}
        >
          {company}
        </Typography>
        <Typography
          variant="h5"
          style={{ marginBottom: spacing(2), fontWeight: 'bold' }}
        >
          {role}
        </Typography>
      </Box>
      <Typography
        variant="h6"
        style={{
          marginBottom: spacing(2),
          color: palette.text.secondary,
        }}
      >
        {makeDate(startDate, endDate)}
      </Typography>
    </Box>
  )
}

const ExperienceDisplay = ({ content }) => {
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
          const description =
            el.description && converter.makeHtml(el.description.description)

          return (
            <li
              key={el.company}
              style={{ marginBottom: spacing(5), marginTop: spacing(5) }}
            >
              <div>
                <JobTitle {...el} />
                <Typography
                  variant="body1"
                  component="span"
                  dangerouslySetInnerHTML={{ __html: description }}
                  style={{
                    marginBottom: spacing(3),
                  }}
                />
                <Typography
                  variant="h6"
                  style={{
                    marginTop: spacing(2),
                    fontStyle: 'italic',
                  }}
                >
                  Stack:
                </Typography>
                <ul
                  style={{
                    listStyleType: 'none',
                    paddingLeft: 0,
                  }}
                >
                  {el.stack.map((s, j) => (
                    <li
                      style={{
                        display: 'inline',
                      }}
                      key={`${s}-${j}`}
                    >
                      {s}
                      {notLast(j, el.stack) && <Separator />}
                    </li>
                  ))}
                </ul>
              </div>
              {notLast(i, contentByLang) && (
                <Divider variant="middle" style={{ marginTop: spacing(5) }} />
              )}
            </li>
          )
        })}
      </ul>
    </>
  )
}

const notLast = (index, array) => index < array.length - 1

const Separator = () => <span> - </span>

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

export default Experience
