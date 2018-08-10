/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

import React from 'react'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0" />
        <link rel="author" href="/humans.txt"/>
        {...props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <div
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}
