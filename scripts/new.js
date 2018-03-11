/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

const { join, resolve } = require('path')
const inquirer = require('inquirer')
const fs = require('fs-extra')
const { safeDump } = require('js-yaml')
const { slugify } = require('transliteration')
const pluralize = require('pluralize')
const format = require('date-fns/format')

const contentPath = '../content'

const template = (frontmatter) => `---
${frontmatter}---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus leo, interdum venenatis lacinia in, tincidunt a dolor. Phasellus gravida felis ac tortor laoreet commodo. In sodales quam eleifend bibendum fringilla. Maecenas viverra, risus nec luctus scelerisque, tortor metus sagittis nulla, at consequat ligula metus vel eros. Donec nec odio ornare, vehicula arcu at, condimentum erat. Nullam sollicitudin, metus eget consectetur venenatis, ex eros faucibus enim, ut molestie risus lorem id sapien. Nullam commodo molestie odio, ultrices tempor sem vestibulum vitae. Fusce ut pulvinar leo. Nullam quis neque a neque elementum posuere id at nulla. Vestibulum vehicula ex a diam condimentum suscipit.`

async function run() {
  const { title, layout, assets } = await inquirer.prompt([
    {
      type: 'inpuut',
      name: 'title',
      message: 'Please provide a title',
    },
    {
      type: 'list',
      name: 'layout',
      message: 'Choose a layout',
      choices: ['post', 'guide'],
    },
    {
      type: 'confirm',
      name: 'assets',
      message: 'Does this content have local assets?',
    },
  ])

  const now = new Date()
  const slug = slugify(title)
  const attrs = {
    title,
    layout: layout.toLowerCase(),
    date: format(now, 'YYYY-MM-DD'),
    draft: true,
  }

  const output = template(safeDump(attrs))
  const root = layout === 'post'
    ? join(pluralize(layout), format(now, 'YYYY/MM'))
    : pluralize(layout)

  const filePath = assets
    ? resolve(__dirname, contentPath, root, slug, 'index.md')
    : resolve(__dirname, contentPath, root, `${slug}.md`)

  try {
    await fs.ensureFile(filePath)
  } catch (_) {
    throw new Error(`Unable to create file path: ${filePath}`)
  }

  try {
    await fs.writeFile(filePath, output)
  } catch (_) {
    throw new Error(`Unable to write file: ${filePath}`)
  }
}

run().catch(console.error)