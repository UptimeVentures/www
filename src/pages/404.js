/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

import React from 'react'
import Helmet from 'react-helmet'

import Page from '../components/Page'
import Content from '../components/Content'
import Navigation from '../components/Navigation'

export default function NotFound() {
  return (
    <Page>
      <Helmet
        title="404 Not Found"
      />
      <Navigation/>
      <Content>
        <h1>Not Found</h1>
      </Content>
    </Page>
  )
}
