// @flow

// Copyright 2018 Uptime Ventures, Ltd. All rights reserved.

import React from 'react'
import Helmet from 'react-helmet'

import 'normalize.css'
import 'typeface-oxygen'

export default function Layout({ children }) {
  return (
    <div>
      <Helmet
        title="Uptime Ventures"
        titleTemplate="%s | Uptime Ventures"
        meta={[
          // Leave as @UptimeVentures for now,
          // at least until after launch.
          {
            name: 'twitter:site',
            content: '@UptimeVentures',
          },
          {
            name: 'twitter:creator',
            content: '@UptimeVentures',
          },
          {
            name: 'twitter:creator:id',
            content: '762126850566914048',
          },
          {
            name: 'og:type',
            content: 'website',
          },
          {
            name: 'og:site_name',
            content: 'Uptime Ventures',
          },
        ]}
      >
      </Helmet>
      {children()}
    </div>
  )
}
