/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

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

export default function BlogPage({ data }) {
  const posts = data.posts
    ? data.posts.edges.map(({ node }) => node) : []

  return (
    <Page>
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
