import styled from '@emotion/styled'
import { useTheme } from '@material-ui/core'
import React from 'react'
import { FaGithub, FaLinkedin, FaLocationArrow } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { usePersonalDetails } from './FooterIcons'
import { UnstyledLink } from './UnstyledLink'

const Contact = () => {
  const { city, email, github, linkedin } = usePersonalDetails()

  const { spacing } = useTheme()

  const iconStyle = { style: { marginRight: spacing(2) } }

  return (
    <div>
      {/* <PageTitle>
        <wording.Translate phrase="CONTACT" />
      </PageTitle> */}

      <ul style={{ listStyleType: 'none', paddingLeft: 'initial' }}>
        <LiLink href={'mailto:' + email} target="_blank">
          <IoIosMail {...iconStyle} />
          {email}
        </LiLink>
        <MyLi>
          <FaLocationArrow {...iconStyle} />
          {city}
        </MyLi>
        <LiLink href={`https://${github}`}>
          <FaGithub {...iconStyle} />
          {github}
        </LiLink>
        <LiLink href={`https://${linkedin}`}>
          <FaLinkedin {...iconStyle} target="_blank" />
          {linkedin}
        </LiLink>
      </ul>
    </div>
  )
}

const LiLink = (props) => (
  <UnstyledLink href={props.href}>
    <MyLi>{props.children}</MyLi>
  </UnstyledLink>
)
const MyLi = styled('li')(() => {
  const { spacing } = useTheme()

  return {
    fontSize: spacing(3),
    display: 'flex',
    alignItems: 'center',
    paddingBottom: spacing(1),
  }
})

export default Contact
