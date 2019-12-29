import { IntlContext } from '../intl/IntlContext'
import React, { Component } from 'react'
import Toggle from 'react-toggle'
import styled from '@emotion/styled'

export const ToggleWrapper = styled('div')({ margin: '0 10px' })

export const LangLabel = styled('div')({
  color: 'white!important',
  display: 'flex',
  height: '100%',
  alignItems: 'center',
})

const MyLangLabel = styled(LangLabel)({
  fontSize: '0.6em',
})

export default class IntlToggle extends Component {
  state = {}

  toggle = () => {}
  render() {
    return (
      <ToggleWrapper>
        <IntlContext.Consumer>
          {({ lang, toggleLang }) => (
            <Toggle
              icons={{
                checked: <MyLangLabel>en</MyLangLabel>,
                unchecked: <MyLangLabel>fr</MyLangLabel>,
              }}
              onChange={toggleLang}
            />
          )}
        </IntlContext.Consumer>
      </ToggleWrapper>
    )
  }
}
