import { Typography } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import showdown from 'showdown'
import { useLang } from '../../contexts/IntlProvider'
import { filterByLang } from '../../wording'
import { PageTitle } from '../common'

const converter = new showdown.Converter()

const useAllContentfullJob = () => {
  return useStaticQuery(graphql`
    query MyQuery {
      allContentfulShortBio {
        edges {
          node {
            node_locale
            text {
              text
            }
          }
        }
      }
    }
  `)
}

const ShortBio = () => {
  const response = useAllContentfullJob()

  const { edges } = response.allContentfulShortBio

  return <ShortBioDisplay content={edges.map(({ node }) => node)} />
}

const ShortBioDisplay = ({ content }) => {
  const lang = useLang()

  const converter = new showdown.Converter()
  const contentByLang = content.filter(filterByLang(lang))[0].text.text

  const html = converter.makeHtml(contentByLang)

  return (
    <Typography
      variant="h6"
      component="span"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default ShortBio
