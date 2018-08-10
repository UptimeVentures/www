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
import SubscriptionForm from '../components/SubscriptionForm'

const Headline = styled.h2`
  font-size: 2em;
  margin: 0 auto .5em;
  text-align: center;
  @media(min-width: 800px) {
    font-size: 3em;
  }
`

const Subhead = styled.p`
  font-size: 1.1em;
  text-align: center;
  margin: 0 auto;
  @media(min-width: 700px) {
    max-width: 60%;
  }
`

export default function NewsletterPage() {
  return (
    <Page>
      <Helmet
        title="Newsletter"
        titleTemplate="%s | Uptime Ventures"
        description="Technology moves fast. You should too."
      />
      <Navigation/>
      <Content>
        <Headline>Newsletter</Headline>
        <Subhead>Education. News. Forethought. All in one place: the Uptime Ventures Newsletter.</Subhead>
        <SubscriptionForm id="bba3556ae4b84e208d0899accbc65b41"/>
      </Content>
    </Page>
  )
}
