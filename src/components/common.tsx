import React from 'react'
import styled from '@emotion/styled'
import { IntlContext } from '../contexts/IntlContext'

import { Link } from 'gatsby'
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

export const BigLink = styled(Link)({ fontSize: '1.5em', display: 'block' })
