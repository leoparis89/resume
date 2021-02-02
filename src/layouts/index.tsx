import React from 'react'
import IntlProvider from '../intl/IntlContext'
import ThemeProvider from '../intl/themeContext'

export default props => {
  return <div>hello{props.children}</div>
}
