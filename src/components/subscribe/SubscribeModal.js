import React from "react"
import { Modal } from "../ui-components"
import { Dialog } from "@headlessui/react"
import { SubscribeForm } from "./SubscribeForm"
import { HiOutlineX as CloseIcon } from "react-icons/hi"

export const SubscribeModal = ({ isOpen, setIsOpen }) => {
  function closeModal() {
    setIsOpen(false)
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal}>
      <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden align-middle transition-all transform shadow-xl bg-light md:px-20 md:py-10 bg rounded-2xl">
        <CloseIcon
          className="absolute top-0 m-4 text-3xl cursor-pointer -right-0 text-hotPink"
          onClick={closeModal}
        />
        <Dialog.Title
          as="h2"
          className="mb-5 text-2xl text-center md:mb-10 md:text-4xl text-gradient bg-gradient-to-r from-hotPink to-gold"
        >
          Subscribe <br />
          and get your free theme!
        </Dialog.Title>

        <SubscribeForm className="subscribe-form" />
      </div>
    </Modal>
  )
}
