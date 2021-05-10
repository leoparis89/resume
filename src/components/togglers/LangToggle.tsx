import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  ListItemIcon,
  MenuItem,
  Select,
  styled,
  TextField,
} from '@material-ui/core'
import { Translate } from '@material-ui/icons'
import React, { useContext } from 'react'
import Toggle from 'react-toggle'
import { IntlContext, NodeLocale } from '../../contexts/IntlContext'

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
  const { toggleLang, lang } = useContext(IntlContext)

  return (
    <ToggleWrapper>
      {/* <Toggle
        icons={{
          checked: <MyLangLabel>en</MyLangLabel>,
          unchecked: <MyLangLabel>fr</MyLangLabel>,
        }}
        onChange={toggleLang}
      /> */}

      {/* <TextField
        id="standard-select-currency"
        select
        // value={currency}
        // onChange={handleChange}
        // helperText="Please select your currency"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Translate />
            </InputAdornment>
          ),
        }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField> */}

      <FormControl>
        <Select
          // renderValue={(value: any) => (
          //   <span style={{ display: 'flex', alignItems: 'center' }}>
          //     <InputAdornment position="start">
          //       <Translate />
          //     </InputAdornment>
          //   </span>
          // )}
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
          // IconComponent={() =>
          // }
          // startAdornment={
          //   <InputAdornment position="start">
          //     <Translate />
          //   </InputAdornment>
          // }
          labelId="demo-simple-select-label"
          id="demo-simple-select"

          // value={age}
          // onChange={handleChange}
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
