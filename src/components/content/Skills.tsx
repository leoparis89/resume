import React from 'react'
import { StaticQuery, graphql, StaticQueryProps } from 'gatsby'
import { NodeLocale } from '../../contexts/IntlContext'
import { withLang } from '../common'

const SkillsDisplay = ({ skillName, lang }) => (
  <div>
    <h3>{SKILLS[lang]}</h3>
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
    render={(data) => {
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
