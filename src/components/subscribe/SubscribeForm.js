import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export const SubscribeForm = ({ ...props }) => {
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
  return (
    <>
      {msg ? (
        msg
      ) : (
        <form onSubmit={handleSubmit} {...props}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email address"
            onChange={handleChange}
            value={email}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </>
  )
}
