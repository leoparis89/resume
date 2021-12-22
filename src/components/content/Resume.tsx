import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Contact from './Contact'
import Education from './Education'
import Skills from './Skills'
import { ConnectedWork } from './Work'

export const Resume: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h1" component="h1">
          Lev Kowalski
        </Typography>

        <Typography variant="h2" component="h6">
          Fullstack developer
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Contact />
      </Grid>
      <Grid item xs={12} md={6}>
        <Skills />
      </Grid>
      <Grid item xs={12} md={6} />
      <Grid item xs={4} />
      <Grid item xs={12}>
        <ConnectedWork />
      </Grid>
      <Grid item xs={12}>
        <Education />
      </Grid>
    </Grid>
  )
}
