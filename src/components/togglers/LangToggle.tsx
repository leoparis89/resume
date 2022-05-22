import {
  FormControl,
  ListItemIcon,
  MenuItem,
  Select,
  styled,
  useTheme,
} from '@material-ui/core'
import { Translate } from '@material-ui/icons'
import React, { useContext } from 'react'
import { IntlContext, NodeLocale } from '../../contexts/IntlProvider'

export const ToggleWrapper = styled('div')({ margin: '10px 10px' })

const IntlToggle = () => {
  const { toggleLang, lang } = useContext(IntlContext)
  const { spacing } = useTheme()

  return (
    <FormControl style={{ marginRight: spacing(3) }}>
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
