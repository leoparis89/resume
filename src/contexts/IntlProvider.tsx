import React, { useContext, useState } from 'react'

export enum NodeLocale {
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

export const useLang = () => useContext(IntlContext).lang

const IntlProvider = (props) => {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const langParam = urlParams.get('lang')

  const [lang, setLang] = useState<NodeLocale>(
    langParam === 'en' ? NodeLocale.EN : NodeLocale.FR
  )

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

export default IntlProvider
