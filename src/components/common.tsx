import { Link as VanillaLink } from 'gatsby'
import { styled, Typography, useTheme } from '@material-ui/core'
import React from 'react'

export const Link = styled(VanillaLink)({
  color: 'inherit',
  textDecoration: 'inherit',
})

export const PageTitle: React.FC = (props) => {
  const { spacing } = useTheme()

  return (
    <Typography
      component="h3"
      variant="h4"
      style={{ textTransform: 'uppercase', margin: `${spacing(4)}px 0` }}
    >
      {props.children}
    </Typography>
  )
}
