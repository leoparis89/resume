import React from 'react'
import { useLang } from '../../contexts/IntlContext'
import * as wording from '../../wording'
import { PageTitle } from '../common'
import { usePersonalDetails } from './Footer'

const Contact = () => {
  const { city, email, github, linkedin } = usePersonalDetails()
  const lang = useLang()

  return (
    <div>
      <PageTitle>
        <wording.Translate phrase="CONTACT" />
      </PageTitle>

      <ul>
        <li>{email}</li>
        <li>{city}</li>
        <li>{github}</li>
        <li>{linkedin}</li>
      </ul>
    </div>
  )
}

export default Contact
