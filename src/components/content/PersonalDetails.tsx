import { styled } from '@material-ui/core'
import { graphql, StaticQuery, StaticQueryProps } from 'gatsby'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { withLang } from '../common'

const IconStyle = { fontSize: '1.5em', margin: '0 10px 0 0' }

const UnstyledLink = styled('a')({
  color: 'inherit',
  textDecoration: 'none',
  textShadow: 'none',
  backgroundImage: 'none',
}) as any

const PersonalData: React.FC = () => (
  <StaticQuery
    query={graphql`
      query personalDetails {
        contentfulPersonalDetails {
          city
          email
          github
          linkedin
        }
      }
    `}
    render={(data: StaticQueryProps) => {
      return (
        <PersonalDetailsWithLang
          contentfulPersonalDetails={(data as any).contentfulPersonalDetails}
        />
      )
    }}
  />
)

const PersonalDetails = ({ contentfulPersonalDetails, lang }) => {
  const { city, email, github, linkedin } = contentfulPersonalDetails

  return (
    <div>
      <UnstyledLink href={'mailto:' + email} target="_blank">
        <IoIosMail size={30} style={IconStyle} />
      </UnstyledLink>
      <UnstyledLink href={'http://' + github} target="_blank">
        <FaGithub size={30} style={IconStyle} />
      </UnstyledLink>
      <UnstyledLink href={'http://' + linkedin} target="_blank">
        <FaLinkedin size={30} style={IconStyle} />
      </UnstyledLink>
    </div>
  )
}

const PersonalDetailsWithLang = withLang(PersonalDetails)

export default PersonalData
