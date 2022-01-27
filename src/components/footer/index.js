import React from "react"
import { SocialFollows } from "../social"
import clsx from "clsx"
import { FooterSubscribe } from "../subscribe/FooterSubscribe"

export const Footer = ({ ...props }) => {
  return (
    <>
      <FooterSubscribe />
      <footer
        className={clsx(
          "mt-auto",
          "py-5",
          "bg-gradient-to-tr from-[#180d28] to bg-purple-900 ",
          "text-footerColor"
        )}
        {...props}
      >
        <div className="center-container">
          <div className={`text-center mb-3`}>
            © {new Date().getFullYear()} | Built with{`   `}
            <a
              href="https://gatsbywpthemes.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby WP Themes
            </a>
          </div>
          <SocialFollows />
        </div>
      </footer>
    </>
  )
}
