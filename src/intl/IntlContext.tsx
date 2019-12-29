import React from 'react'
// Assurez-vous que la forme de la valeur par défaut passée à
// createContext correspond à la forme que les consommateurs attendent !
export const IntlContext = React.createContext({
  lang: 'fr',
  toggleLang: () => {},
})

export default class IntlProvider extends React.Component {
  toggleLang = () => {
    const lang = this.state.lang === 'fr' ? 'en' : 'fr'
    this.setState({ lang })
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
