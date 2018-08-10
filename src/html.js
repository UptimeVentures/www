/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

import React from 'react'
import Helmet from 'react-helmet'

export default function HTML(props) {
  const {
    headComponents,
    body,
    postBodyComponents,
  } = props

  const { title, meta, link } = Helmet.rewind()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0" />
        {headComponents}
        <link rel="author" href="/humans.txt"/>
        {title.toComponent()}
        {meta.toComponent()}
        {link.toComponent()}
      </head>
      <body>
        <div
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  )
}
