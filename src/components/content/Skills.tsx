import { Typography } from '@material-ui/core'
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { Translate } from '../../wording'
import { PageTitle, withLang } from '../common'

const SkillsDisplay = ({ skillName, lang }) => (
  <div>
    <PageTitle>
      <Translate phrase="SKILLS" />
    </PageTitle>
    <Typography variant="h5" component="span">
      {skillName.join(' • ')}
    </Typography>
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

export default Skills
