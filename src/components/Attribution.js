/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

import React from 'react'
import Link from 'gatsby-link'

const Attribution = ({ authors = [] }) => (
  <span>
    <Link to={`/blog/author/${authors[0].replace(' ', '-').toLowerCase()}/`}>{authors[0]}</Link>
  </span>
)

export default Attribution
