import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Layout from '../components/layout'
import Overview from '../components/Overview'
import PersonalData from '../components/PersonalDetails'

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
          <Work />
        </Col>
      </Row> */}
        </Container>
      </Layout>
    )
  }
}
export default IndexPage
