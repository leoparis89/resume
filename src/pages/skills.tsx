import React from 'react'
import Layout from '../components/Layout/MainLayout'
import Skills from '../components/content/Skills'
import { BigLink } from '../components/common'

const SecondPage = () => (
  <Layout>
    <Skills />
    <BigLink to="/">Go back to the homepage</BigLink>
  </Layout>
)

export default SecondPage
