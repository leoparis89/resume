import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import ShortBio from './ShortBio'

export const Resume: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Typography variant="h1" component="h1" gutterBottom>
          Lev Kowalski
        </Typography>
        <Typography variant="h3" component="h2" gutterBottom>
          Fullstack Developer
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <Contact />
      </Grid>
      <Grid item xs={12}>
        <ShortBio />
        <Experience />
      </Grid>
      <Grid item xs={12}>
        <Education />
      </Grid>
    </Grid>
  )
}
