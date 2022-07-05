import React from 'react'
import { Resume } from '../../components/content/Resume'
import Wrap from '../../hoc/withProviders'
const Wrapped = () => (
  <Wrap noHeader>
    <Resume />
  </Wrap>
)
export default Wrapped
