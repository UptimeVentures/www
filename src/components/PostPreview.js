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
`

const Link = styled(GLink)`
  text-decoration: none;
`

const Headline = styled.h3`
  font-size: 2em;
`

const PostPreview = ({ fields, frontmatter, excerpt }) => (
  <Container>
    {frontmatter.title ? (
      <Link to={fields.slug}>
        <Headline>{frontmatter.title}</Headline>
      </Link>
    ) : undefined}
    {excerpt ? (
      <p dangerouslySetInnerHTML={{ __html: excerpt }}/>
    ) : undefined}
  </Container>
)

export default PostPreview
