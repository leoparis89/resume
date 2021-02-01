import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Education from '../components/content/Education'
import Overview from '../components/content/Overview'
import PersonalData from '../components/content/PersonalDetails'
import Jobs from '../components/content/ProfessionalExperience'
import Skills from '../components/content/Skills'
import Layout from '../components/Layout/MainLayout'
import { MyLink } from '../components/Layout/MyLink'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Overview />
          {/* <PersonalData /> */}
          <MyLink href="/goo">Projets</MyLink>
          <MyLink href="/page-2">Stack technique</MyLink>
          <MyLink href="/goo">Expérience professionelle</MyLink>
          <MyLink href="/goo">Contact</MyLink>
          <MyLink href="/goo">Formation</MyLink>
          {/* <Row>
            <Col xs="12" md="6">
              <Education />
            </Col>
            <Col xs="12" md="6">
              <Skills />
            </Col>
          </Row>

          <Row>
            <Col xs="12" md="12">
              <Jobs />
            </Col>
          </Row> */}
        </Container>
      </Layout>
    )
  }
}
export default IndexPage
