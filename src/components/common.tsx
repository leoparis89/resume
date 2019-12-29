import React from 'react'
import styled from '@emotion/styled'
import { IntlContext } from '../intl/IntlContext'

export const MyH4 = styled('h4')({
  textTransform: 'uppercase',
})

export const withLang = Comp => props => (
  <IntlContext.Consumer>
    {({ lang }) => {
      return <Comp {...props} lang={lang} />
    }}
  </IntlContext.Consumer>
)
