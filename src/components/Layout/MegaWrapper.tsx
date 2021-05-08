import { red } from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { Helmet } from 'react-helmet'
import { DarkLightThemeProvider } from '../../contexts/DarkLight'

export default function MegaWrapper(props: any) {
  return (
    <React.Fragment>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        {/* <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        /> */}
      </Helmet>
      <DarkLightThemeProvider>{props.children}</DarkLightThemeProvider>
    </React.Fragment>
  )
}
