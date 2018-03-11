/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

import React from 'react'
import styled from 'styled-components'

const Container = styled.figure`
  width: 100%;
  position: relative;
  margin-bottom: 3em;
  color: #999;
  font-size: .8em;
`

const Image = styled.img`
  max-width: 100%;
  position: relative;
  z-index: 1;
`

const FeaturedImage = ({ src, alt, caption, url }) => (
  <Container>
    <Image src={src} alt={alt}/>
    {caption ? (
      <figcaption>
        {url ? <a href={url}>{caption}</a> : caption}
      </figcaption>
    ) : undefined}
  </Container>
)

FeaturedImage.defaultProps = {
  alt: 'The featured image for this post',
}

export default FeaturedImage
