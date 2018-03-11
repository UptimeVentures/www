/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

import React from 'react'
import styled from 'styled-components'
import { Twitter, Facebook } from 'react-social-sharing'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5em;

  @media(max-width: 600px) {
    flex-direction: column;
  }
`

const createMessage = title => `${title} from @UptimeVentures:`

const SharePanel = ({ url, title }) => (
  <Container>
    <Twitter
      message={createMessage(title)}
      link={url}
    />
    <Facebook
      link={url}
    />
  </Container>
)

SharePanel.defaultProps = {
  title: 'Blog post from Uptime Ventures',
}

export default SharePanel
