import Typography from 'typography'
import funstonTheme from 'typography-theme-lincoln'
import fairy from 'typography-theme-fairy-gates'
funstonTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  // a: {
  //   textDecoration: 'none'
  // }
})

const typography = new Typography(
  fairy
  //   {
  //   baseFontSize: '18px',
  //   baseLineHeight: 1.666,
  //   headerFontFamily: ['Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
  //   bodyFontFamily: ['Georgia', 'serif']
  // }
)

export default typography
