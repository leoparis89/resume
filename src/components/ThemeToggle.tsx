import Toggle from 'react-toggle'

import { IoIosSunny, IoIosMoon } from 'react-icons/io'
import React, { Component } from 'react'

import { Global, css } from '@emotion/core'
import { LangLabel } from './LangToggle'

export default class ThemeToggle extends Component {
  state = {
    dark: true,
  }

  toggle = () => {
    this.setState({ dark: !this.state.dark })
  }
  render() {
    const { dark } = this.state

    return (
      <div>
        <Global
          styles={css`
            body {
              color: ${!true ? '#23213f' : 'white'};
              background: ${true ? '#23213f' : 'white'};
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              transition: color 0.2s linear, background 0.2s linear;
              color: ${true ? '#c8fcfa' : '#d83781'};
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
