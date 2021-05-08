import React from 'react'
import { IntlContext } from '../contexts/IntlContext'

import { Link as VanillaLink } from 'gatsby'
import { styled } from '@material-ui/core'

export const withLang = (Comp) => (props) => (
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
