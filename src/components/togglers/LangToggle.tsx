import styled from '@emotion/styled'
import React, { useContext } from 'react'
import Toggle from 'react-toggle'
import { IntlContext } from '../../intl/IntlContext'

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
  const { toggleLang } = useContext(IntlContext)

  return (
    <ToggleWrapper>
      <Toggle
        icons={{
          checked: <MyLangLabel>en</MyLangLabel>,
          unchecked: <MyLangLabel>fr</MyLangLabel>,
        }}
        onChange={toggleLang}
      />
    </ToggleWrapper>
  )
}

export default IntlToggle
