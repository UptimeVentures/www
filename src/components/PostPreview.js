/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import GLink from 'gatsby-link'

const Container = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`

const Link = styled(GLink)`
  text-decoration: none;
`

const Headline = styled.h3`
  font-size: 1.5em;
  @media(min-width: 800px) {
    font-size: 2em;
  }
`

const Published = styled.time`
  font-size: .9em;
`

const Preview = styled.p`
  font-family: "PT Serif", serif;
  font-size: 1em;
  margin-top: 1em;
`

const PostPreview = ({ fields, frontmatter, excerpt }) => (
  <Container>
    {frontmatter.title ? (
      <Link to={fields.slug}>
        <Headline>{frontmatter.title}</Headline>
      </Link>
    ) : undefined}
    {frontmatter.rawDate && frontmatter.date ? (
      <Published dateTime={frontmatter.rawDate}>{frontmatter.date}</Published>
    ) : undefined}
    {excerpt ? (
      <Preview dangerouslySetInnerHTML={{ __html: excerpt }}/>
    ) : undefined}
  </Container>
)

export default PostPreview
