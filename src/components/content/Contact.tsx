import React from 'react'
import { useLang } from '../../contexts/IntlContext'
import * as wording from '../../wording'
import { PageTitle } from '../common'
import { usePersonalDetails } from './FooterIcons'

const Contact = () => {
  const { city, email, github, linkedin } = usePersonalDetails()
  const lang = useLang()

  return (
    <div>
      <PageTitle>
        <wording.Translate phrase="CONTACT" />
      </PageTitle>

      <ul style={{ textDecoration: 'none' }}>
        <li style={{ textDecoration: 'none' }}>{email}</li>
        <li>{city}</li>
        <li>{github}</li>
        <li>{linkedin}</li>
      </ul>
    </div>
  )
}

export default Contact
