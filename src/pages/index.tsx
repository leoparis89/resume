import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { BigLink } from '../components/common'
import Overview from '../components/content/Overview'
import Layout from '../components/Layout/MainLayout'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Overview />
          <BigLink to="/goo">Projets</BigLink>
          <BigLink to="/skills">Stack technique</BigLink>
          <BigLink to="/work">Expérience professionelle</BigLink>
          <BigLink to="/goo">Contact</BigLink>
          <BigLink to="/goo">Formation</BigLink>
        </Container>
      </Layout>
    )
  }
}
export default IndexPage
