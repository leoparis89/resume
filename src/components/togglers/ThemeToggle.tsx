import React, { useContext } from 'react'
import { IoIosMoon, IoIosSunny } from 'react-icons/io'
import Toggle from 'react-toggle'
import { ThemeContext } from '../../contexts/DarkLight'
import { LangLabel } from './LangToggle'

const ThemeToggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <div>
      <ToggleBtn onChange={toggleTheme} />
      {theme}
    </div>
  )
}

export default ThemeToggle
// export default class ThemeToggleO extends Component {
//   state = {
//     dark: false,
//   }

//   toggle = () => {
//     this.setState({
//       dark: !this.state.dark,
//     })
//   }
//   render() {
//     const { dark } = this.state
//     const themeColor = themeData[dark ? 'dark' : 'light']

//     return (
//       <div style={{ margin: 30 }}>
//         <Global
//           styles={css`
//             // @font-face {
//             //   font-family: 'Futura';
//             //   src: url('../../fonts/fdutur.ttf');
//             // }
//             a {
//               color: ${themeColor.text};
//               background-image: initial;
//               text-shadow: initial;
//             }
//             body {
//               // color: ${themeColor.text};
//               // background: ${themeColor.background};
//               font-size: 1em !important;
//               // color: #000 !important;
//               font-family: futura !important;
//             }
//             h1,
//             h2,
//             h3,
//             h4,
//             h5,
//             h6 {
//               transition: color 0.2s linear, background 0.2s linear;
//               // color: ${themeColor.headers};
//             }
//           `}
//         />
//         <ToggleBtn onChange={this.toggle} />
//       </div>
//     )
//   }
// }

const ToggleBtn = ({ onChange }) => (
  <Toggle
    onChange={onChange}
    icons={{
      unchecked: (
        <LangLabel>
          <IoIosMoon color="yellow" />
        </LangLabel>
      ),
      checked: (
        <LangLabel>
          <IoIosSunny color="yellow" />
        </LangLabel>
      ),
    }}
  />
)
