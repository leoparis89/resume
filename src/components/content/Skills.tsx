import React from 'react'
import { StaticQuery, graphql, StaticQueryProps } from 'gatsby'
import { UpperCaseH3, withLang } from '../common'
import { NodeLocale } from '../../contexts/IntlContext'

const SkillsDisplay = ({ skillName, lang }) => (
  <div>
    <UpperCaseH3>{SKILLS[lang]}</UpperCaseH3>
    {skillName.join(' • ')}
  </div>
)

const SkillDisplayWithLang = withLang(SkillsDisplay)

const Skills: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query mySkills {
        contentfulSkills {
          skillName
        }
      }
    `}
    render={data => {
      return (
        <SkillDisplayWithLang skillName={data.contentfulSkills.skillName} />
      )
    }}
  />
)

const SKILLS = {
  [NodeLocale.FR]: 'Stack technique',
  [NodeLocale.EN]: 'Tech stack',
}

export default Skills
