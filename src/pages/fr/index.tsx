import React from 'react'
import Overview from '../../components/content/Overview'
import { NodeLocale } from '../../contexts/IntlProvider'
import Wrap from '../../hoc/withProviders'
const Wrapped = () => (
  <Wrap lang={NodeLocale.FR}>
    <Overview />
  </Wrap>
)
export default Wrapped
