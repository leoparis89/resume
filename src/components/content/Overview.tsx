import { makeStyles, Typography } from '@material-ui/core'
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import showdown from 'showdown'
import { filterByLang, IntlContext, useLang } from '../../contexts/IntlContext'
import { Translate } from '../../wording'
import { PageTitle } from '../common'

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
  const lang = useLang()

  const html = converter.makeHtml(content.filter(filterByLang(lang))[0].bio.bio)

  const classes = useStyles()

  return (
    <>
      <PageTitle>
        <Translate phrase="OVERVIEW" />
      </PageTitle>
      <Typography
        variant="h5"
        component="span"
        dangerouslySetInnerHTML={{ __html: html }}
        className={classes.root}
      />
    </>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    ['@global']: {
      ['a:visited']: { color: theme.palette.text.primary },
    },
  },
}))

export default Overview

{
  /* {html} */
}
