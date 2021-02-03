import { Link } from 'gatsby'
import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Overview from '../components/content/Overview'
import Layout from '../components/Layout/MainLayout'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Overview />
          {/* <PersonalData /> */}
          <Link to="/goo">Projets</Link>
          <Link to="/skills">Stack technique</Link>
          <Link to="/goo">Expérience professionelle</Link>
          <Link to="/goo">Contact</Link>
          <Link to="/goo">Formation</Link>
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
