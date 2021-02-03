import React from 'react'
import { BigLink } from '../components/common'
import Work from '../components/content/ProfessionalExperience'
import Layout from '../components/Layout/MainLayout'

const WorkPage = () => (
  <Layout>
    <Work />
    <BigLink to="/">Go back to the homepage</BigLink>
  </Layout>
)

export default WorkPage
