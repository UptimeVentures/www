/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Page from '../components/Page'
import Navigation from '../components/Navigation'
import PageContent from '../components/Content'
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
  margin: 1.5em auto 3em auto;
  text-align: center;
`

const PostContents = styled.div`
  font-family: "PT Serif", serif;
  font-size: 1.1em;
`

const Content = styled(PageContent)`
  max-width: 800px;
`

export default function PostTemplate({ data }) {
  const {
    meta: { site: { host } },
    post: {
      fields: { slug },
      frontmatter: { title, date, rawDate, keywords, image, author },
      excerpt,
      html,
    },
  } = data

  const feature = toAbsolute(host, image && image.childImageSharp
    ? image.childImageSharp.responsiveResolution.src
    : '/share.jpg')

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
        <Headline>{title}</Headline>
        <Meta>
          Published on <time dateTime={rawDate}>{date}</time>. Authored by {author}.
        </Meta>
        <PostContents
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
        author
      }
      fields {
        slug
      }
      html
      excerpt
    }
  }
`
