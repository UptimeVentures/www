/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import Page from '../components/Page'
import Navigation from '../components/Navigation'
import Content from '../components/Content'

const Headline = styled.div`
  height: 80vh;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 2em;
    @media(min-width: 800px) {
      font-size: 4em;
    }
  }

  p {
    font-size: 1.5em;
  }
`

export default function IndexPage() {
  return (
    <Page>
      <Helmet
        title="Uptime Ventures"
      />
      <Navigation/>
      <Content>
        <Headline>
          <div>
            <h2>Hello, we&apos;re Uptime Ventures.</h2>
            <p>
              We launch, coach, and partner with bold new companies
              to accelerate their evolution.
            </p>
          </div>
        </Headline>
      </Content>
    </Page>
  )
}
