import React from 'react'
import { IntlContext } from '../contexts/IntlContext'

import { Link as VanillaLink } from 'gatsby'
import { styled, Typography, useTheme } from '@material-ui/core'

export const withLang = (Comp) => (props) =>
  (
    <IntlContext.Consumer>
      {({ lang }) => {
        return <Comp {...props} lang={lang} />
      }}
    </IntlContext.Consumer>
  )

export const Link = styled(VanillaLink)({
  color: 'inherit',
  textDecoration: 'inherit',
})

export const PageTitle: React.FC = (props) => {
  const { spacing } = useTheme()

  return (
    <Typography
      component="h2"
      variant="h4"
      style={{ textTransform: 'uppercase', marginTop: spacing(4) }}
    >
      {props.children}
    </Typography>
  )
}
