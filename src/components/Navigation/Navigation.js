/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

import React from 'react'
import GLink from 'gatsby-link'
import styled from 'styled-components'

import Logo from '../Logo'
import Menu from './Menu'

const LeftLogo = styled(Logo)`
  margin-left: 0;
  margin-right: auto;
`

const Container = styled.nav`
  width: 90%;
  margin: 1.5em auto;
  max-width: 1400px;
  display: flex;
  align-items: center;
`

const Link = styled(GLink)`
  text-decoration: none;
  color: black;
`

const Navigation = () => (
  <Container>
    <Link to="/">
      <LeftLogo/>
    </Link>
    <Menu>
      <Link to="/blog/">Blog</Link>
    </Menu>
  </Container>
)

export default Navigation
