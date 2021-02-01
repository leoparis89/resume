import React, { useState } from 'react'

export const IntlContext = React.createContext({
  lang: 'fr',
  toggleLang: () => {},
})

const IntlProvider = props => {
  const [lang, setLang] = useState('fr')

  const toggleLang = () => {
    const newLang = lang === 'fr' ? 'en' : 'fr'
    setLang(newLang)
  }

  return (
    <IntlContext.Provider value={{ lang, toggleLang }}>
      {props.children}
    </IntlContext.Provider>
  )
}

export const filterByuLang = lang => node =>
  (node.node_locale as string).includes(lang)

export default IntlProvider
