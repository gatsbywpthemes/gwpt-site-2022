import React from "react"
import { Modal } from "../ui-components"
import { Dialog } from "@headlessui/react"
import { SubscribeForm } from "./SubscribeForm"

export const SubscribeModal = ({ isOpen, setIsOpen }) => {
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal}>
      <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden align-middle transition-all transform shadow-xl bg-light md:px-20 md:py-10 bg rounded-2xl">
        <Dialog.Title
          as="h2"
          className="mb-5 text-center text-gradient bg-gradient-to-r from-hotPink to-gold"
        >
          Susbscribe <br />
          and get our free theme!
        </Dialog.Title>

        <SubscribeForm className="subscribe-form" />

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
    </Modal>
  )
}
