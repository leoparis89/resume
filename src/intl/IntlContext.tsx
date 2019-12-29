import React from 'react'

export const IntlContext = React.createContext({
  lang: 'fr',
  toggleLang: () => {},
})

export default class IntlProvider extends React.Component {
  toggleLang = () => {
    const newLang = this.state.lang === 'fr' ? 'en' : 'fr'
    this.setState({ lang: newLang })
  }
  state = {
    lang: 'fr',
    toggleLang: this.toggleLang,
  }
  render() {
    return (
      <IntlContext.Provider value={this.state}>
        {this.props.children}
      </IntlContext.Provider>
    )
  }
}

export const filterByuLang = lang => node =>
  (node.node_locale as string).includes(lang)
