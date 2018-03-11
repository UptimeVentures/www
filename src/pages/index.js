/**
 * Copyright 2018 Uptime VenturesLtd.
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

const Wrap = styled.div`
  height: 80vh;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`

const Headline = styled.h2`
  font-size: 2em;
  @media(min-width: 800px) {
    font-size: 4em;
  }

`

const Description = styled.p`
  font-size: 1.5em;
`

export default function IndexPage() {
  return (
    <Page>
      <Helmet
        title="Uptime Ventures"
        meta={[
          {
            name: 'keywords',
            value: 'denver rust consulting,rust consultancy denver,rust denver,systems engineering,technology partner denver,uptime ventures,denver technology companies',
          },
        ]}
      />
      <Navigation/>
      <Content>
        <Wrap>
          <div>
            <Headline>Hello we&apos;re Uptime Ventures.</Headline>
            <Description>
              We launch, coach, and partner with bold new companies
              to accelerate their evolution.
            </Description>
          </div>
        </Wrap>
      </Content>
    </Page>
  )
}
