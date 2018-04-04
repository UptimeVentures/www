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

export default function CategoryPage({ data }) {
  const posts = data.posts
    ? data.posts.edges.map(({ node }) => node) : []

  return (
    <Page>
      <Helmet
        title="Categories"
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
  query CategoryTemplate($category: String!) {
    posts: allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          categories: { in: [$category] }
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
