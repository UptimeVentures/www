/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

import React, { Children } from 'react'
import styled from 'styled-components'

const Items = styled.ul`
  list-style-type: none;
  padding: 0 0 0 0;
  margin: 0 0 0 auto;
  display: flex;
  font-size: 1em;
`

const Item = styled.li`
  margin-right: 1em;
  padding: 0 0 0 0;
  font-family: "Open Sans", sans-serif;
  &:last-child { margin-right: 0; }
`

const Menu = ({ children }) => (
  <Items>
    {Children.map(children, (child, i) => (
      <Item key={i}>{child}</Item>
    ))}
  </Items>
)

export default Menu
