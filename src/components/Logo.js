/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  margin: auto auto;
  width: ${p => p.size ? `${p.size}px` : '50px'};
`

const Logo = ({ display, ...props }) => (
  <Image
    src={require('../../static/logo.svg')}
    {...props}
  >
    {display ? <h1>Uptime Ventures</h1> : undefined}
  </Image>
)

Logo.defaultProps = {
  display: false,
}

export default Logo
