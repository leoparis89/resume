import { Box, Typography, useTheme } from '@material-ui/core'
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import showdown from 'showdown'
import { useLang } from '../../contexts/IntlContext'
import { filterByLang, Translate } from '../../wording'
import { PageTitle } from '../common'

const converter = new showdown.Converter()
const Education: React.FC = () => (
  <StaticQuery
    query={graphql`
      query education {
        allContentfulDiploma(sort: { order: DESC, fields: [graduationDate] }) {
          edges {
            node {
              node_locale
              university
              graduationDate
              name
              specialty {
                specialty
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      return (
        <EducationDisplay
          content={data.allContentfulDiploma.edges.map(({ node }) => node)}
        />
      )
    }}
  />
)

const EducationDisplay = ({ content }) => {
  const lang = useLang()

  return (
    <>
      <PageTitle>
        <Translate phrase="EDUCATION" />
      </PageTitle>
      {content.filter(filterByLang(lang)).map((el) => {
        const { spacing } = useTheme()

        return (
          <Box key={el.university} marginBottom={spacing(1)}>
            <Typography variant="h5" component="h5" gutterBottom>
              {el.university}
            </Typography>
            <Typography variant="h6">
              {el.name} {el.graduationDate.split('-')[0]}
            </Typography>
            <Typography variant="h6">{el.specialty.specialty}</Typography>
          </Box>
        )
      })}
    </>
  )
}

export default Education
