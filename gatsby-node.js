/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

const { resolve } = require('path')
const get = require('lodash.get')
const { slugify } = require('transliteration')
const format = require('date-fns/format')

const pageTemplate = resolve('src/templates/Page.js')
const postTemplate = resolve('src/templates/Post.js')
const guideTemplate = resolve('src/templates/Guide.js')

function createPages({ graphql, boundActionCreators }) {
  const { createPage, createRedirect } = boundActionCreators

  // Temporarily redirect feed URLs
  createRedirect({
    fromPath: '/blog/rss.xml',
    toPath: '/blog/feed.xml',
    isPermanent: true,
  })

  const query = `
    {
      allMarkdownRemark(filter: {
        frontmatter: { draft: { ne: true } }
      }) {
        edges {
          node {
            frontmatter {
              title
              layout
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `

  return graphql(query).then(({ errors, data }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    const { allMarkdownRemark } = data

    // Process markdown posts.
    allMarkdownRemark.edges.forEach(({ node }) => {
      const slug = get(node, 'fields.slug')
      const show = get(node, 'frontmatter.show')
      const layout = get(node, 'frontmatter.layout')

      if (slug) {
        createPage({
          path: slug,
          component: template(layout),
          context: {
            slug,
            show,
          },
        })
      }
    })
  })
}

function onCreateNode({ node, boundActionCreators, getNode }) {
  const { createNodeField } = boundActionCreators
  const fileNode = getNode(node.parent)

  let slug
  if (node.internal.type === 'MarkdownRemark') {
    if (fileNode.relativePath.indexOf('posts/') !== -1) {
      // This markdown file is a post from the blog.
      slug = [
        'blog',
        format(node.frontmatter.date, 'YYYY/MM'),
        slugify(node.frontmatter.title.replace(`'`, ``)),
      ].join('/')
    } else if (fileNode.relativePath.indexOf('guides/') !== -1) {
      slug = [
        'guides',
        slugify(node.frontmatter.title.replace(`'`, ``)),
      ].join('/')
    } else {
      slug = slugify(node.frontmatter.title)
    }
  }

  if (slug) {
    createNodeField({ node, name: 'slug', value: slashify(slug) })
  }
}

function slashify(slug) {
  if (slug.charAt(0) !== '/') {
    slug = '/' + slug
  }

  if (slug.charAt(slug.length - 1) !== '/') {
    slug = slug + '/'
  }

  return slug
}

function template(t = 'page') {
  t = t.toLowerCase()

  switch (t) {
    case 'post':
      return postTemplate
    case 'guide':
      return guideTemplate
    default:
      return pageTemplate
  }
}

module.exports = {
  createPages,
  onCreateNode,
}
