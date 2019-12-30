import React from 'react'
import styled from '@emotion/styled'
import { graphql, StaticQuery, StaticQueryProps } from 'gatsby'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { MdLocationOn } from 'react-icons/md'
import { MyH4, withLang } from './common'

const IconStyle = { fontSize: '1.5em', margin: '0 10px 0 0' }

const UnstyledLink = styled.a({
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

const PERSONAL_DETAILS = {
  fr: 'Détails',
  en: 'Personal details',
}

const PersonalDetails = ({ contentfulPersonalDetails, lang }) => {
  const { city, email, github, linkedin } = contentfulPersonalDetails

  return (
    <div>
      <MyH4>{PERSONAL_DETAILS[lang]}</MyH4>
      <ul style={{ listStyleType: 'none', margin: 0 }}>
        <li>
          <MdLocationOn style={IconStyle} />
          {city}
        </li>
        <li>
          <IoIosMail style={IconStyle} />
          {email}
        </li>
        <li>
          <FaGithub style={IconStyle} />
          <UnstyledLink href={github} target="_blank">
            {github}
          </UnstyledLink>
        </li>
        <li>
          <FaLinkedin style={IconStyle} />
          <UnstyledLink href={linkedin} target="_blank">
            {linkedin}
          </UnstyledLink>
        </li>
      </ul>
    </div>
  )
}

const PersonalDetailsWithLang = withLang(PersonalDetails)

export default PersonalData
