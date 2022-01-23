import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import tw from "twin.macro"
import clsx from "clsx"
import { GradientBorder } from "../ui-components"

export const SubscribeForm = ({ modal, ...props }) => {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    addToMailchimp(email, { FNAME: firstName }).then((data) => {
      console.log("data", data)
      return data.result === "success"
        ? setMsg(data.msg)
        : setMsg("This email has already subscribed, try with another one")
    })
  }
  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  const styledInput = "  border-0 bg-orange-50 shadow-sm rounded-md "
  return (
    <>
      {msg ? (
        msg
      ) : (
        <form onSubmit={handleSubmit} {...props}>
          <GradientBorder className={clsx(` p-[3px] mb-5 rounded-md`)}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              required
              onChange={(e) => setFirstName(e.target.value)}
              className={styledInput}
            />
          </GradientBorder>
          <GradientBorder className={clsx(` p-[3px] mb-5 rounded-md`)}>
            <input
              type="email"
              placeholder="Email address"
              onChange={handleChange}
              value={email}
              className={styledInput}
              required
            />
          </GradientBorder>
          <button type="submit">Subscribe</button>
        </form>
      )}
    </>
  )
}
