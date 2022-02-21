import React from "react"
import { SubscribeForm } from "./SubscribeForm"
import tw, { css } from "twin.macro"

export const FooterSubscribe = () => {
  return (
    <div className="py-20 bg-gradient-to-tr from-[#390066] via-purple-900 to-[#ff5c2d]">
      <div className="text-center center-container">
        <h2 className="text-4xl text-gradient bg-gradient-to-r from-light to-gold">
          Subscribe to get our free themes
          <br /> and all the news
        </h2>
        <SubscribeForm
          className="max-w-lg gap-5 px-5 pt-16 pb-10 mx-auto space-y-5 md:flex md:space-y-0"
          css={{
            input: tw`text-purple-200 bg-purple-800 border-2 border-purple-600 placeholder:text-purple-300`,
          }}
        />
        <p className="max-w-md mx-auto text-sm italic text-purple-300">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
          nibh, ut fermentum massa justo sit amet risus. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam.
        </p>
      </div>
    </div>
  )
}
