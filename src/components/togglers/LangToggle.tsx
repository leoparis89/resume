import { styled } from '@material-ui/core'
import React, { createContext, useContext } from 'react'
import Toggle from 'react-toggle'
import { ThemeContext } from '../../contexts/DarkLight'
import { IntlContext } from '../../contexts/IntlContext'

export const ToggleWrapper = styled('div')({ margin: '10px 10px' })

export const LangLabel = styled('div')({
  color: 'white!important',
  display: 'flex',
  height: '100%',
  alignItems: 'center',
})

const MyLangLabel = styled(LangLabel)({
  fontSize: '0.6em',
})

const IntlToggle = () => {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <ToggleWrapper>
      <Toggle
        icons={{
          checked: <MyLangLabel>en</MyLangLabel>,
          unchecked: <MyLangLabel>fr</MyLangLabel>,
        }}
        onChange={toggleTheme}
      />
    </ToggleWrapper>
  )
}

export default IntlToggle
