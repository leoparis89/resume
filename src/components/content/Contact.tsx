import { Typography } from '@material-ui/core'
import { styled } from '@material-ui/styles'
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

      <ul style={{ listStyleType: 'none' }}>
        <MyLi>{email}</MyLi>
        <MyLi>{city}</MyLi>
        <MyLi>{github}</MyLi>
        <MyLi>{linkedin}</MyLi>
      </ul>
    </div>
  )
}

const MyLi = styled('li')(({ theme }) => {
  return { fontSize: theme.spacing(2) }
})

const LI = (props) => (
  <li>
    {' '}
    <Typography variant="button" {...props}>
      {' '}
      hello
    </Typography>
  </li>
)
export default Contact
