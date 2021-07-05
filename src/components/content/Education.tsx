import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import showdown from 'showdown'
import { filterByLang, IntlContext, useLang } from '../../contexts/IntlContext'
import { Translate } from '../../wording'
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
        const html = el.specialty && converter.makeHtml(el.specialty.specialty)

        return (
          <div key={el.university}>
            <h4>{el.university} </h4>
            <div>
              {el.name} {el.graduationDate.split('-')[0]}
            </div>
            <div>
              <span dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Education
