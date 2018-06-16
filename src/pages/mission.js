/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import md from 'markdown-in-js'

import Page from '../components/Page'
import Navigation from '../components/Navigation'
import PageContent from '../components/Content'
import SubscriptionForm from '../components/SubscriptionForm'

const Headline = styled.h1`
  text-align: center;
  margin-top: 1.5em;
  margin-bottom: 0;
  font-size: 1.7em;
  @media(min-width: 700px) {
    font-size: 2.5em;
  }
  @media(min-width: 960px) {
    font-size: 3em;
  }
`

const Subhead = styled.div`
  margin: 1.5em auto 1.5em auto;
  font-size: 1.3em;
  text-align: center;
  line-height: 1.7em;
`

const Content = styled(PageContent)`
  max-width: 800px;
`

const Contents = () => md`
  It's no secret that technical skills and tools are in demand. Understandably so. Software is still [eating the world][eating], a phenomenon we shouldn't anticipate ending anytime soon.

  Increasingly, decisions aren't made primarily by logic coded into software by humans. Instead, we rely on artificial intelligences and systems that can learn and improve on their own. Futurists have long recommended caution out of fear these systems will overthrow existing governments one day.

  The following principals, laid out at the founding of Uptime Ventures, are designed to guide our work and that of our colleagues.

  ---

  ## Innovation Comes at a Cost

  This doesn't simply refer to the Silicon Valley ideal of "disrupting,"
  a market. Instead, it's an invitation to technologists around the world to
  scrutinize technical systems for social costs.

  When technology is used to undermine the basic humanity of others, it
  ceases to be a positive force.

  ## Consistently Deliver Value

  It's not enough to build something new. In order to deliver the best
  product, we have build it in partnership with those who will use it most.

  Beginning even in the earliest stages, the usefulness of a product or idea
  must be constantly demonstrated.

  ## Don't Needlessly Hide Our Mistakes

  Mistakes are how we all learn. It's important to generations of future
  tech workers that we leave our mistakes (and their resulting fixes!)
  intact.

  [eating]: https://techcrunch.com/2016/06/07/software-is-eating-the-world-5-years-later/
`

// $FlowFixMe
export default function MissionPage() {
  const title = 'Mission'

  return (
    <Page>
      <Helmet
        title={title}
        titleTemplate="%s | Uptime Ventures"
        meta={[
          {
            name: 'twitter:title',
            content: title,
          },
          {
            name: 'og:title',
            content: title,
          },
          {
            name: 'twitter:card',
            content: 'summary',
          },
        ]}
      >
        <link
          rel="pingback"
          href="https://webmention.io/uptime.ventures/xmlrpc"
        />
        <link
          rel="webmention"
          href="https://webmention.io/uptime.ventures/webmention"
        />
      </Helmet>
      <Navigation/>
      <Content>
        <article>
          <Headline>
            Mission
          </Headline>
          <Subhead>
            Working towards a brighter future for all our planet and all of its inhabitants.
          </Subhead>
          <Contents/>
        </article>
        <SubscriptionForm id="bba3556ae4b84e208d0899accbc65b41"/>
      </Content>
    </Page>
  )
}

export const pageQuery = graphql`
  query MissionTemplate {
    meta: site {
      site: siteMetadata {
        host: siteUrl
      }
    }
  }
`
