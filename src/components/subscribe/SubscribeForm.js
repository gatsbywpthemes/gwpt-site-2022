import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import clsx from "clsx"
import { GradientBorderPurple } from "../ui-components"

export const SubscribeForm = ({ modal, ...props }) => {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    addToMailchimp(email, { FNAME: firstName }).then((data) => {
      return data.result === "success"
        ? setMsg(
            "Thank you for subscribing! we have sent you a confirmation email with your free theme."
          )
        : setMsg("This email has already subscribed, try with another one")
    })
  }
  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  const WithGradient = ({ children }) => {
    return modal ? (
      <GradientBorderPurple className="p-[3px] mb-5 rounded-md">
        {children}
      </GradientBorderPurple>
    ) : (
      children
    )
  }
  const styledInput =
    " input-focus border-0 bg-orange-50 shadow-sm rounded-md text-text "
  return (
    <>
      {msg ? (
        <div className="text-lg text-text">{msg}</div>
      ) : (
        <form onSubmit={handleSubmit} {...props}>
          <WithGradient>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
              className={styledInput}
            />
          </WithGradient>
          <WithGradient>
            <input
              type="email"
              placeholder="Email address"
              onChange={handleChange}
              value={email}
              className={styledInput}
              required
            />
          </WithGradient>
          <div className="flex justify-end">
            <button className="btn btn-primary btn-large" type="submit">
              Subscribe
            </button>
          </div>
        </form>
      )}
    </>
  )
}
