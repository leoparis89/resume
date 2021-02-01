import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Education from '../components/content/Education'
import Overview from '../components/content/Overview'
import PersonalData from '../components/content/PersonalDetails'
import Jobs from '../components/content/ProfessionalExperience'
import Skills from '../components/content/Skills'
import Layout from '../components/Layout/MainLayout'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Row>
            <Col xs="12" md="6">
              <PersonalData />
            </Col>
            <Col xs="12" md="6">
              <Overview />
            </Col>
          </Row>
          <Row>
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
          </Row>
        </Container>
      </Layout>
    )
  }
}
export default IndexPage
