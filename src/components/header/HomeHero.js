import React, { useState, Fragment } from "react"
import heroImage from "../../images/hero-image.svg"
import { StaticImage } from "gatsby-plugin-image"
import { Dialog, Transition } from "@headlessui/react"

import clsx from "clsx"
import { SusbcribeModal } from "../subscribe/SubscribeModal"
import { Modal } from "../ui-components"
import { SubscribeForm } from "../subscribe/SubscribeForm"

export const HomeHero = () => {
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  return (
    <>
      <div className="container items-center justify-between px-4 py-10 mx-auto lg:flex md:px-0">
        <div className="space-y-7 left">
          <h1 className="text-4xl !leading-tight md:text-5xl lg:text-6xl">
            Gatsby themes{" "}
            <span className="text-gradient bg-gradient-to-r from-pink to-yellow">
              designed to work <br className="hidden lg:block" /> with{" "}
            </span>
            WordPress
          </h1>
          <h3 className="text-3xl leading-normal">
            Get your feet wet with <br /> our free theme!
          </h3>
          <div
            className={clsx(
              `inline-block p-1 rounded-full`,
              `bg-gradient-to-r from-purple to-yellow`,
              `shadow-xl hover:shadow-2xl shadow-[#212338]/50 hover:shadow-yellow hover:-translate-y-1`,
              `transition duration-500`
            )}
          >
            <button
              className="px-8 py-4 text-xl font-semibold rounded-full bg-light text-text"
              onClick={() => setIsOpen(true)}
            >
              Get your{" "}
              <span className="text-2xl font-black text-orange-600">FREE</span>{" "}
              theme now!
            </button>
          </div>
        </div>
        {/* <StaticImage src={heroImage} alt="" width={600} height={450} /> */}
        <img src={heroImage} alt="" />
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Payment successful
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
