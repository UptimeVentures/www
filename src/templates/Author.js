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
import PostPreview from '../components/PostPreview'

const Item = styled.div`
  margin-bottom: 2em;
  &:last-child {
    margin-bottom: 0;
  }
`

export default function AuthorPage({ data }) {
  const posts = data.posts
    ? data.posts.edges.map(({ node }) => node) : []

  return (
    <Page>
      <Helmet
        title="Posts by author"
        titleTemplate="%s | Uptime Ventures"
        description="Inspiration, news, and education from Uptime Ventures."
      />
      <Navigation/>
      <Content>
        {posts.map((p, i) => (
          <Item key={i}>
            <PostPreview {...p}/>
          </Item>
        ))}
      </Content>
    </Page>
  )
}

export const pageQuery = graphql`
  query FuckingAuthorTemplate($author: String!) {
    posts: allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          authors: { in: [$author] }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
