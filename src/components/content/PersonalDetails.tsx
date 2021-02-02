import React from 'react'
import styled from '@emotion/styled'
import { graphql, StaticQuery, StaticQueryProps } from 'gatsby'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'
import { UpperCaseH3, withLang } from '../common'

const IconStyle = { fontSize: '1.5em', margin: '0 10px 0 0' }

const UnstyledLink = styled.a({
  color: 'inherit',
  textDecoration: 'none',
  textShadow: 'none',
  backgroundImage: 'none',
}) as any

const MyLi = styled('li')({ display: 'flex' })

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

const PERSONAL_DETAILS = {
  fr: 'Détails',
  en: 'Personal details',
}

const PersonalDetails = ({ contentfulPersonalDetails, lang }) => {
  const { city, email, github, linkedin } = contentfulPersonalDetails

  return (
    <div>
      <UnstyledLink href={'mailto:' + email} target="_blank">
        <IoIosMail style={IconStyle} />
      </UnstyledLink>
      <UnstyledLink href={'http://' + github} target="_blank">
        <FaGithub style={IconStyle} />
      </UnstyledLink>
      <UnstyledLink href={'http://' + linkedin} target="_blank">
        <FaLinkedin style={IconStyle} />
      </UnstyledLink>
    </div>
  )
}

const PersonalDetailsWithLang = withLang(PersonalDetails)

export default PersonalData
