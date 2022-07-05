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

// const getLang = (langParam: string) => {
//   if (/^fr\b/.test(langParam)) {
//     return NodeLocale.FR
//   }

//   return NodeLocale.EN
// }

export const useLang = () => useContext(IntlContext).lang

const IntlProvider = ({ children, lang: initialLang = NodeLocale.EN }) => {
  const [lang, setLang] = useState<NodeLocale>(initialLang)

  const toggleLang = () => {
    const newLang = lang === NodeLocale.FR ? NodeLocale.EN : NodeLocale.FR
    setLang(newLang)
  }

  return (
    <IntlContext.Provider value={{ lang, toggleLang }}>
      {children}
    </IntlContext.Provider>
  )
}

export default IntlProvider
