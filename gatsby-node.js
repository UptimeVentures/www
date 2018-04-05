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
const categoryTemplate = resolve('src/templates/Category.js')
const authorTemplate = resolve('src/templates/Author.js')

async function createPages({ graphql, boundActionCreators }) {
  const { createPage, createRedirect } = boundActionCreators

  // Temporarily redirect feed URLs
  createRedirect({
    fromPath: '/blog/rss.xml',
    toPath: '/blog/feed.xml',
    isPermanent: true,
  })

  const query = `
    {
      blog: allMarkdownRemark(filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/posts/" }
      }) {
        edges {
          node {
            frontmatter {
              title
              layout
              categories
              authors
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `

  const { data, errors } = await graphql(query)

  if (errors) {
    throw new Error(errors.join(', '))
  }

  const { blog } = data

  // Process blog posts.
  let postCategories = []
  let postAuthors = []
  blog.edges.forEach(({ node }) => {
    const slug = get(node, 'fields.slug')
    const show = get(node, 'frontmatter.show')
    const layout = get(node, 'frontmatter.layout')
    const categories = get(node, 'frontmatter.categories')
    const authors = get(node, 'frontmatter.authors')

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

    if (categories) {
      postCategories = postCategories.concat(categories)
    }

    if (authors) {
      postAuthors = postAuthors.concat(authors)
    }

    // Create category index pages for blog posts.
    postCategories.filter((v, i, acc) => acc.indexOf(v) === i)
      .forEach(category => {
        const slug = `/blog/category/${slugify(category)}/`
        createPage({
          path: slug,
          component: categoryTemplate,
          context: {
            category,
            slug,
          },
        })
      })

    // Create author index pages for blog posts.
    postAuthors.filter((v, i, acc) => acc.indexOf(v) === i)
      .forEach(author => {
        const slug = `/blog/author/${slugify(author)}/`
        createPage({
          path: slug,
          component: authorTemplate,
          context: {
            author,
            slug,
          },
        })
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
