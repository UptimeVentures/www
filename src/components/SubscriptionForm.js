/**
 * Copyright 2018 Uptime Ventures, Ltd.
 * All rights reserved.
 *
 * @flow
 */

/* global fetch, FormData */

import React from 'react'
import styled from 'styled-components'
import UFS from '@uptimeventures/ufs-react'
import { Input } from '@uptimeventures/ufs-dom'

const Container = styled.div`
  margin-top: 4em;
  margin-bottom: 4em;
  text-align: center;
  border-top: 1px rgba(0, 0, 0, .2) solid;
`
const Headline = styled.h2`
  margin-top: none;
`

const Description = styled.p`
  font-family: "PT Serif", serif;
  font-size: 1em;
`

const Email = styled(Input)`
  padding: .5em;
  width: 100%;
  margin: 0 auto 1em auto;
  text-align: center;
  display: block;
  @media(min-width: 450px) {
    width: 40%;
  }
`

const Button = styled.button`
  padding: 1em;
  background: rgba(0, 0, 0, .05);
  border: none;
  cursor: pointer;
`

const subscribeUrl = (id: string) =>
  `https://madmimi.com/signups/subscribe/${id}`

function validate(values) {
  const errors = {}

  if (!values.email) {
    errors.email = 'Please enter your email.'
  }

  return errors
}

function bindSubmit(id) {
  return values => {
    const body = new FormData()

    for (let field in values) {
      body.append(`signup[${field}]`, values[field])
    }

    return fetch(subscribeUrl(id), {
      method: 'POST',
      mode: 'no-cors',
      body,
    })
  }
}

type Props = {
  id: string,
}

const SubscriptionForm = ({ id }: Props) => (
  <UFS
    validate={validate}
    handleSubmit={bindSubmit(id)}
  >
    {({ handleSubmit, errors, success }) => (
      <form
        action={subscribeUrl(id)}
        onSubmit={handleSubmit}
      >
        <Container>
          <Headline>
            {errors.email ? (
              errors.email
            ) : (
              success
                ? 'Thanks for subscribing!'
                : 'Stay up to date'
            )}
          </Headline>
          <Description>
            Technology moves fast. Get our blog articles
            and guides sent to your inbox.
          </Description>
          <Email
            type="email"
            name="email"
          />
          <Button>
            Sign Up
          </Button>
        </Container>
      </form>
    )}
  </UFS>
)

export default SubscriptionForm
