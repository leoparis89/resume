import React from 'react'
import { Resume } from '../../components/content/Resume'
import { NodeLocale } from '../../contexts/IntlProvider'
import Wrap from '../../hoc/withProviders'

const Wrapped = () => (
  <Wrap lang={NodeLocale.FR}>
    <Resume />
  </Wrap>
)
export default Wrapped
