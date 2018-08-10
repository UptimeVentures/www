/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Navigation from '../components/Navigation'
import Attribution from '../components/Attribution'
import PageContent from '../components/Content'
import SharePanel from '../components/SharePanel'
import FeaturedImage from '../components/FeaturedImage'
import SubscriptionForm from '../components/SubscriptionForm'
import toAbsolute from '../util/toAbsolute'

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

const Meta = styled.div`
  margin: 1.5em auto 1.5em auto;
  text-align: center;
  line-height: 1.7em;
`

const PostContents = styled.div`
  font-size: 1.1em;
`

const Content = styled(PageContent)`
  max-width: 800px;
`

// $FlowFixMe
export default function PostTemplate({ data }) {
  const {
    meta: { site: { host } },
    post: {
      fields: { slug },
      frontmatter: { title, date, rawDate, keywords, illustration, illustrationDescription, caption, authors },
      excerpt,
      html,
    },
  } = data

  const hasFeature = illustration && illustration.childImageSharp
  const feature = toAbsolute(host, hasFeature
    ? hasFeature.resolutions.src : '/share.jpg')

  const canonical = toAbsolute(host, slug)

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
          {
            name: 'twitter:description',
            content: excerpt,
          },
          {
            name: 'og:description',
            content: excerpt,
          },
          {
            name: 'og:url',
            content: canonical,
          },
          {
            name: 'twitter:image',
            content: feature,
          },
          {
            name: 'og:image',
            content: feature,
          },
          {
            name: 'description',
            content: excerpt,
          },
          {
            name: 'keywords',
            content: keywords,
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
          <Headline>{title}</Headline>
          <Meta>
            Published on <time dateTime={rawDate}>{date}</time> / Authored by <Attribution authors={authors}/>
          </Meta>
          <SharePanel title={title} url={canonical}/>
          {hasFeature ? (
            <FeaturedImage
              {...hasFeature.resolutions}
              alt={illustrationDescription || undefined}
              caption={caption || undefined}
            />
          ) : undefined}
          <PostContents
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
        <SubscriptionForm id="bba3556ae4b84e208d0899accbc65b41"/>
      </Content>
    </Page>
  )
}

export const pageQuery = graphql`
  query PostTemplate($slug: String!) {
    meta: site {
      site: siteMetadata {
        host: siteUrl
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        rawDate: date
        keywords
        authors
        illustration {
          childImageSharp {
            resolutions(width: 1200) {
              src
              srcSet
            }
          }
        }
        illustrationDescription
        caption
      }
      fields {
        slug
      }
      html
      excerpt
    }
  }
`
