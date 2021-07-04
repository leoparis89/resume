import {
  FormControl,
  ListItemIcon,
  MenuItem,
  Select,
  styled,
} from '@material-ui/core'
import { Translate } from '@material-ui/icons'
import React, { useContext } from 'react'
import { IntlContext, NodeLocale } from '../../contexts/IntlContext'

export const ToggleWrapper = styled('div')({ margin: '10px 10px' })

export const LangLabel = styled('div')({
  color: 'white!important',
  display: 'flex',
  height: '100%',
  alignItems: 'center',
})

const IntlToggle = () => {
  const { toggleLang, lang } = useContext(IntlContext)

  return (
    <ToggleWrapper>
      <FormControl>
        <Select
          value={lang}
          onChange={(e) => {
            toggleLang(e.target.value)
          }}
          style={{ width: 50 }}
          renderValue={() => (
            <div>
              <ListItemIcon>
                <Translate />
              </ListItemIcon>
              hello
            </div>
          )}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        >
          {languages.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ToggleWrapper>
  )
}

const languages: { value: NodeLocale; label: string }[] = [
  {
    value: NodeLocale.FR,
    label: 'Français',
  },
  {
    value: NodeLocale.EN,
    label: 'English',
  },
]
export default IntlToggle
