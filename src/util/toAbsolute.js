/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

export default function toAbsolute(host, slug) {
  if (host.charAt(host.length - 1) === '/') {
    host = host.slice(0, -1)
  }

  if (slug.charAt(0) !== '/') {
    slug = '/' + slug
  }

  return host + slug
}
