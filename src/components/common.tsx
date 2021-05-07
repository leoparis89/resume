import React from 'react'
import { IntlContext } from '../contexts/IntlContext'

import { Link as VanillaLink } from 'gatsby'
import { styled } from '@material-ui/core'
export const UpperCaseH3 = styled('h3')({
  textTransform: 'uppercase',
})

export const withLang = (Comp) => (props) => (
  <IntlContext.Consumer>
    {({ lang }) => {
      return <Comp {...props} lang={lang} />
    }}
  </IntlContext.Consumer>
)

export const BigLink = styled(VanillaLink)({
  fontSize: '1.5em',
  display: 'block',
})

export const Link = styled(VanillaLink)({ textDecoration: 'none' })
