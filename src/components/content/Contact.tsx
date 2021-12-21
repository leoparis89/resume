import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import * as wording from '../../wording'
import { PageTitle, withLang } from '../common'

const Contact = ({ skillName, lang }) => (
  <div>
    <PageTitle>
      <wording.Translate phrase="CONTACT" />
    </PageTitle>
    hello
  </div>
)

const SkillDisplayWithLang = withLang(Contact)

const Skills: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query mySkills {
        contentfulSkills {
          skillName
        }
      }
    `}
    render={(data) => {
      return (
        <SkillDisplayWithLang skillName={data.contentfulSkills.skillName} />
      )
    }}
  />
)

export default Skills
