import React, { useState } from 'react'

enum NodeLocal {
  FR = 'fr',
  EN = 'en-US',
}

export const IntlContext = React.createContext<{
  lang: NodeLocal
  toggleLang: any
}>({
  lang: NodeLocal.FR,
  toggleLang: () => {},
})

const IntlProvider = props => {
  const [lang, setLang] = useState<NodeLocal>(NodeLocal.FR)

  const toggleLang = () => {
    const newLang = lang === NodeLocal.FR ? NodeLocal.EN : NodeLocal.FR
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
