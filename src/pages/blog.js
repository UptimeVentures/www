/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

import React from 'react'

import Page from '../components/Page'
import Navigation from '../components/Navigation'
import Content from '../components/Content'
import PostPreview from '../components/PostPreview'

export default function BlogPage({ data }) {
  const posts = data.posts
    ? data.posts.edges.map(({ node }) => node) : []

  return (
    <Page>
      <Navigation/>
      <Content>
        {posts.map((p, i) => <PostPreview {...p} key={i}/>)}
      </Content>
    </Page>
  )
}

export const pageQuery = graphql`
  query BlogPage {
    posts: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { draft: { ne: true } }
      }
      sort: {
        order: DESC
        fields: [frontmatter___date]
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            rawDate: date
            keywords
            tags
          }
          excerpt
        }
      }
    }
  }
`
