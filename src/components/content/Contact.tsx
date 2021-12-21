import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import * as wording from '../../wording'
import { PageTitle, withLang } from '../common'

const Contact = ({ skillName, lang }) => (
  <div>
    <PageTitle>
      <wording.Translate phrase="CONTACT" />
    </PageTitle>
  </div>
)

const SkillDisplayWithLang = withLang(Contact)

export default Contact
