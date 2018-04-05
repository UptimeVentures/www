/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

const url = require('url')
const absolutify = require('absolutify')
const humanizeList = require('humanize-list')

module.exports = {
  siteMetadata: {
    title: 'Uptime Ventures',
    byline: 'Security with convenience',
    email: 'hello@uptime.ventures',
    siteUrl: 'https://www.uptime.ventures',
    feedTitle: 'Uptime Ventures Blog',
    feedDescription: 'Inspiration, news, and education from Uptime Ventures.',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-json',
    'gatsby-transformer-yaml',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/util/typography.js',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-104028789-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Uptime Ventures',
        short_name: 'UV',
        icons: [],
        start_url: '/',
        background_color: 'white',
        theme_color: 'white',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: feedTitle
                description: feedDescription
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            query: `
              {
                allMarkdownRemark(
                  filter: {
                    fileAbsolutePath: { regex: "/posts/" }
                    frontmatter: { draft: { ne: true } }
                  }
                  sort: {
                    order: DESC
                    fields: [frontmatter___date]
                  }
                ) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        date
                        authors
                        categories
                      }
                      excerpt
                      html
                    }
                  }
                }
              }
            `,
            setup({ query: { site: { siteMetadata } } }) {
              return {
                title: siteMetadata.title,
                description: siteMetadata.description,
                site_url: siteMetadata.siteUrl,
                feed_url: url.resolve(siteMetadata.siteUrl, '/blog/feed.xml'),
              }
            },
            serialize({ query: { site, allMarkdownRemark } }) {
              const edges = allMarkdownRemark.edges
                ? allMarkdownRemark.edges.map(e => e.node) : []

              const intoItem = n => ({
                title: n.frontmatter.title,
                description: n.excerpt,
                custom_elements: [{ 'content:encoded': absolutify(n.html, site.siteMetadata.siteUrl) }],
                url: url.resolve(
                  site.siteMetadata.siteUrl,
                  n.fields.slug
                ),
                guid: url.resolve(
                  site.siteMetadata.siteUrl,
                  n.fields.slug
                ),
                categories: n.frontmatter.categories || [],
                author: humanizeList(n.frontmatter.authors, {
                  oxfordComma: true,
                }),
                date: n.frontmatter.date,
              })

              return edges.map(intoItem)
            },
            output: '/blog/feed.xml',
          },
        ],
      },
    },
  ],
}
