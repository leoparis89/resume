import { Divider, Grid, Typography, useTheme } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import showdown from 'showdown'
import { useLang } from '../../contexts/IntlContext'
import { filterByLang, Translate } from '../../wording'
import { PageTitle } from '../common'
import Contact from './Contact'
import Education from './Education'
import Skills from './Skills'

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

const Work: React.FC = () => {
  const data = useAllContentfullJob()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" component="h1">
          Lev Kowalski
        </Typography>

        <Typography
          variant="h2"
          component="h6"
          // style={{ fontStyle: 'italic' }}
        >
          Fullstack developer
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Contact />
      </Grid>
      <Grid item xs={12} md={6}>
        <Skills />
      </Grid>
      <Grid item xs={12} md={6} />
      <Grid item xs={4} />
      <Grid item xs={12}>
        <WorkDisplay
          content={data.allContentfulJob.edges.map(({ node }) => node)}
        />
      </Grid>
      <Grid item xs={12}>
        <Education />
      </Grid>
    </Grid>
  )
}

const WorkDisplay = ({ content }) => {
  const lang = useLang()

  const contentByLang = content.filter(filterByLang(lang))

  const { spacing, palette } = useTheme()

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
                <Typography
                  variant="h5"
                  style={{ marginBottom: spacing(2), fontWeight: 'bold' }}
                >
                  {el.company} - {el.role}
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: spacing(2),
                    color: palette.text.secondary,
                  }}
                >
                  {makeDate(el.startDate, el.endDate)}
                </Typography>
                <div
                  dangerouslySetInnerHTML={{ __html: description }}
                  style={{
                    marginBottom: spacing(3),
                    fontSize: spacing(2),
                  }}
                />
                <Typography
                  variant="h6"
                  style={{
                    marginBottom: spacing(2),
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

const Separator = () => <span> // </span>

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
