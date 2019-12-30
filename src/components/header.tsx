import styled from '@emotion/styled'
import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { Container } from 'reactstrap'
import { filterByuLang, IntlContext } from '../intl/IntlContext'
import LangToggle from './LangToggle'
interface HeaderProps {}

const Title: React.FC = ({ children }) => (
  <StaticQuery
    query={graphql`
      query description {
        allContentfulDescription {
          edges {
            node {
              name
              job
              node_locale
            }
          }
        }
      }
    `}
    render={data => {
      // const { city, email, github, linkedin } = (data as any).contentfulPersonalDetails
      const nodes = data.allContentfulDescription.edges.map(({ node }) => node)

      return <DescriptionDisplay content={nodes} />
    }}
  />
)

const DescriptionDisplay = ({ content }) => (
  <IntlContext.Consumer>
    {({ lang }) => (
      <div>
        {content.filter(filterByuLang(lang)).map(el => (
          <div>
            <h1>{el.name}</h1>
            <h2>{el.job}</h2>
          </div>
        ))}
      </div>
    )}
  </IntlContext.Consumer>
)
const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1em 0px',
})

const Header: React.FC<HeaderProps> = () => (
  <header>
    <Container>
      <Wrapper>
        <Title />
        <span style={{ marginTop: 5 }}>{<LangToggle />}</span>
      </Wrapper>
    </Container>
  </header>
)

export default Header
