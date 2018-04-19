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
import Content from '../components/Content'

const Wrap = styled.div`
  height: 70vh;
  min-height: 400px;
  max-height: 500px;
  display: flex;
  align-items: center;
`

const Headline = styled.h2`
  font-size: 2em;
  margin-top: 0;
  @media(min-width: 800px) {
    font-size: 3em;
  }

`

const Subhead = styled.h3`
  font-size: 1.5em;
  border-top: 1px rgba(0, 0, 0, .1) solid;
  padding-top: 1em;
  @media(min-width: 800px) {
    font-size: 2em;
  }
`

const Description = styled.p`
  font-size: 1.2em;
  @media(min-width: 800px) {
    max-width: 80%;
    font-size: 1.5em;
  }
`

const Subdescription = styled.p`
  font-size: 1.1em;
  @media(min-width: 700px) {
    max-width: 60%;
  }
`

const Grid = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 800px) {
    flex-direction: row;
    align-items: space-between;
  }

  div {
    margin-top: .75em;
    @media(min-width: 800px) {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`

const Section = styled.div`
  margin-bottom: 1em;
`

export default function IndexPage({ data }) {
  const projects = data.projects
    ? data.projects.edges.map(e => e.node) : []

  const posts = data.posts
    ? data.posts.edges.map(e => e.node) : []

  return (
    <Page>
      <Helmet
        title="Digital excellence, delivered"
        titleTemplate="%s | Uptime Ventures"
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
            <Headline>Digital excellence, delivered.</Headline>
            <Description>
              We&rsquo;re Uptime Ventures. We launch, coach, and partner with bold new companies to accelerate their evolution.
            </Description>
          </div>
        </Wrap>
        <Section>
          <Subhead>Writing</Subhead>
          <Subdescription>
            Our blog is where we share knowledge, investigate difficult technological questions, and prepare you to tackle complex issues of the future.
          </Subdescription>
          <Grid>
            {posts.map(({ frontmatter, excerpt, fields }, id) => (
              <div key={id}>
                {frontmatter.illustration ? (
                  <Link to={fields.slug}>
                    <img
                      {...frontmatter.illustration.image.responsiveResolution}
                    />
                  </Link>
                ) : undefined}
                <Link to={fields.slug}>
                  <h4>{frontmatter.title}</h4>
                </Link>
                <p dangerouslySetInnerHTML={{ __html: excerpt }}/>
              </div>
            ))}
          </Grid>
        </Section>
        <Section>
          <Subhead>Open Source</Subhead>
          <Subdescription>
            We practice <Link to="/blog/category/open-design/">open design</Link> wherever
            possible, which leads naturally towards open source. Here are a few of our favorite projects:
          </Subdescription>
          <Grid>
            {projects.map(({ title, description, url }, id) => (
              <div key={id}>
                <img
                />
                <a href={url}>
                  <h4>{title}</h4>
                </a>
                <p dangerouslySetInnerHTML={{ __html: description }}/>
              </div>
            ))}
          </Grid>
        </Section>
      </Content>
    </Page>
  )
}

export const pageQuery = graphql`
  query IndexPage {
    projects: allOpenSourceYaml {
      edges {
        node {
          title
          url
          description
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 3
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
            illustration {
              image: childImageSharp {
                responsiveResolution(width: 300, height: 200) {
                  src
                  srcSet
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
