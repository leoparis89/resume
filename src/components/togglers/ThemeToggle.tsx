import Toggle from 'react-toggle'

import { IoIosSunny, IoIosMoon } from 'react-icons/io'
import React, { Component } from 'react'

import { Global, css } from '@emotion/core'
import { LangLabel } from './LangToggle'

const themeData = {
  light: {
    text: 'black',
    // background: 'white',
    background: 'linear-gradient(210deg, #e6f9fa, #caf7c6);',
    headers: '#f779b8',
  },
  dark: {
    text: 'white',
    background: ' linear-gradient(217deg, #2f2a61, #4b2e6e);',
    headers: '#ADEFD1FF',
  },
}

export default class ThemeToggle extends Component {
  state = {
    dark: true,
  }

  toggle = () => {
    this.setState({
      dark: !this.state.dark,
    })
  }
  render() {
    const { dark } = this.state
    const themeColor = themeData[dark ? 'dark' : 'light']

    return (
      <div style={{ margin: 30 }}>
        <Global
          styles={css`
            a {
              color: ${themeColor.text};
              background-image: initial;
              text-shadow: initial;
              text-decoration: underline;
            }
            body {
              color: ${themeColor.text};
              background: ${themeColor.background};
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              transition: color 0.2s linear, background 0.2s linear;
              color: ${themeColor.headers};
            }
          `}
        />
        <Toggle
          onChange={this.toggle}
          icons={{
            checked: (
              <LangLabel>
                <IoIosMoon color="yellow" />
              </LangLabel>
            ),
            unchecked: (
              <LangLabel>
                <IoIosSunny color="yellow" />
              </LangLabel>
            ),
          }}
        />
      </div>
    )
  }
}
