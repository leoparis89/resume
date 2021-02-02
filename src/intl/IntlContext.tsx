import React, { useState } from 'react'

enum NodeLocale {
  FR = 'fr',
  EN = 'en-US',
}

export const IntlContext = React.createContext<{
  lang: NodeLocale
  toggleLang: any
}>({
  lang: NodeLocale.FR,
  toggleLang: () => {},
})

const IntlProvider = props => {
  const [lang, setLang] = useState<NodeLocale>(NodeLocale.FR)

  const toggleLang = () => {
    const newLang = lang === NodeLocale.FR ? NodeLocale.EN : NodeLocale.FR
    setLang(newLang)
  }

  return (
    <IntlContext.Provider value={{ lang, toggleLang }}>
      {props.children}
    </IntlContext.Provider>
  )
}

export const filterByLang = lang => node =>
  (node.node_locale as string).includes(lang)

export default IntlProvider
