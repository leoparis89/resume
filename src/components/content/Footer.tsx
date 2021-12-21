import { Box, styled, useTheme } from '@material-ui/core'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { useLang } from '../../contexts/IntlContext'

const UnstyledLink = styled('a')({
  color: 'inherit',
  textDecoration: 'none',
  textShadow: 'none',
  backgroundImage: 'none',
}) as any

const usePersonalDetails = () => {
  const data = useStaticQuery(graphql`
    query personalDetails {
      contentfulPersonalDetails {
        city
        email
        github
        linkedin
      }
    }
  `)

  return (data as any).contentfulPersonalDetails
}

const ConnectedFooter: React.FC = () => {
  return (
    <Footer contentfulPersonalDetails={usePersonalDetails()} lang={useLang()} />
  )
}

const Footer = ({ contentfulPersonalDetails, lang }) => {
  const { city, email, github, linkedin } = contentfulPersonalDetails

  const { spacing } = useTheme()

  const IconStyle = {
    fontSize: '1.5em',
    marginLeft: spacing(2),
    marginRight: spacing(2),
  }

  return (
    <Box margin={`${spacing(1)}px 0`}>
      <UnstyledLink href={'mailto:' + email} target="_blank">
        <IoIosMail size={30} style={IconStyle} />
      </UnstyledLink>
      <UnstyledLink href={'http://' + github} target="_blank">
        <FaGithub size={30} style={IconStyle} />
      </UnstyledLink>
      <UnstyledLink href={'http://' + linkedin} target="_blank">
        <FaLinkedin size={30} style={IconStyle} />
      </UnstyledLink>
    </Box>
  )
}

export default ConnectedFooter
