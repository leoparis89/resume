import { Typography } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { useLang } from '../../contexts/IntlProvider'
import { Translate } from '../../wording'
import { PageTitle } from '../common'

const useSkills = () => {
  return useStaticQuery(graphql`
    query mySkills {
      contentfulSkills {
        skillName
      }
    }
  `)
}

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

const ConnectedSkills: React.FC = ({ children }) => {
  const lang = useLang()
  const data = useSkills()

  return (
    <SkillsDisplay skillName={data.contentfulSkills.skillName} lang={lang} />
  )
}

export default ConnectedSkills
