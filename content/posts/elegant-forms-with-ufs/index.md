---
title: Creating Elegant Forms with UFS
author: Nicholas Young
layout: post
date: 2018-03-28
draft: false
tags:
  - form-validation
  - react
  - front-end
keywords:
  - react
  - ultimate form system
illustration: feature.jpg
illustrationDescription: 'A laptop, sitting on a desk, with code on its screen.'
caption: 'Image courtesy of Fabian Grohs on Unsplash'
---
Ask any front-end web developer: forms can be notoriously difficult. You have
to keep up with filled and unfilled fields, which of them are valid, display
errors when your users invariably attempt to enter invalid data, and depending
on state, allow the form to be submitted or prevent submission entirely.

Working on the back-end couldn't be more different. I trained initially on data
validation in server-side languages before considering JavaScript, HTML, and
CSS as potential disciplines. In my world, form validation and error reporting
was largely a solved problem: applications evaluate the complete dataset by
a clearly defined validation rules. The result, valid or invalid, is
returned to the user. From the application's point of view, transient states
are rare.

Entry, as pointed out by the front-end engineer, should be effortless for the
user. Relating errors to a given field is critical
for the success of this happy path. On the other hand, our server is largely
concerned with how deeply values are nested, and the total size of our
serialized object.

Both scenarios are made easier by well-formed APIs.

## The Ultimate Form System

Here at [Uptime Ventures][ufs], we're always interested in tools that ease common
developer processes. All applications, regardless of platform, need to receive
user input, which is generally a form. In early 2018, I wondered if we could
invent a cross platform library that tidied user experience flows and enhance developer happiness when dealing
with complex inputs.

We've done it, and the result is even better than I could've hoped for. Allow me to introduce the [Ultimate Form
System][ufs] (UFS); a concise form validation library, designed to meet our
demanding needs, and now available to you. UFS presents a unified API that feels
natural across iOS, Android, and the web, starting with tools provided by React
and React Native. Here's a brief example:

```javascript
import React from 'react'
import Form from '@uptimeventures/ufs-react'
import { Input, Textarea } from '@uptimeventures/ufs-dom'

const Contact = () => (
  <Form
    validate={values => ({})},
    handleSubmit={values => {}}
  />
    {({ handleSubmit }) => (
      <Input
        name="name"
        placeholder="Your Name"
        required
      />
      <Textarea
        name="message"
        placeholder="Your Message"
        required
      />
      <button>Submit</button>
    )}
  </Form>
)
```

Behind the scenes, we're using React's [Context API][react-context] to
drive data propagation. If the form has errors, parent components will render them only when the field values are invalid, and remove them when the errors are no longer present. And that's [UFS'][ufs] greatest strength: the library is only a few lines of *non-magical* JavaScript. Technically speaking, [JSX][jsx] and [React][react] are optional; though its declarative syntax is ideal for expressing our intent, we aren't married to a specific framework.

Additionally, it's possible that the API can become even cleaner as we explore upcoming language features.

## Customizing UFS

While the above example is contrived, it demonstrates just how quickly you can
develop a working form with UFS. However, because all of our pre-built
elements (like `<Input/>` and `<Textarea/>`), are structured as [higher-order
components][hoc] [UFS'][ufs] real power is hidden below the surface.

I'll use a specialized component, that you will likely employ, to explain.

```javascript
import React from 'react'
import { withAPI } from '@uptimeventures/ufs-react'

const ErrorWrapper = withAPI(({ name, api: { errors }) => (
  <div>
    {errors[name] ? errors[name] : null}
  </div>
))
```

While our component can store and utilize local state, state isn't required. If the field we're watching experiences an error, our component will be re-rendered with the error value, as shown above. Notice that we do this all without complex logic or markup.

You may have also noticed how logic and presentation concerns are split between the [`ufs`][ufscore] and [`ufs-dom`][ufsdom] packages in our first example. This separation allows UFS to render anywhere React renders: on web or native platforms. It also eases graduation from using predefined components to developing your own, as shown above.

## Upcoming Releases

[UFS][ufs] has been in use on internal projects for several months, and version `1.0.0` is just around the corner. [DOM rendering][ufsdom] should be considered stable, but I'd like to complete a basic component library for React Native prior to release. UFS will render on React Native, and we're even using it in a few native applications, but have yet to release a prebuilt components library mirroring [`ufs-dom`][ufsdom].

That's where you come in. How can UFS improve further? It is already the only *zero-dependency*, most ergonomic, form design toolkit that we know of. But I'm certain we can take it further, together. Give it a try and let us know what you think.

[uv]: https://www.uptime.ventures/
[ufs]: https://www.npmjs.com/package/@uptimeventures/ufs-react/
[jsx]: https://reactjs.org/docs/introducing-jsx.html
[hoc]: https://reactjs.org/docs/higher-order-components.html
[react-context]: https://reactjs.org/docs/context.html
[ufscore]: https://bitbucket.org/uptimeventures/ufs/src/master/packages/ufs-react/
[ufsdom]: https://bitbucket.org/uptimeventures/ufs/src/master/packages/ufs-dom/
