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
      <div>
        <Dialog.Title as="h2" className="text-center">
          Subscribe and get our free theme!
        </Dialog.Title>
        <SubscribeForm />
      </div>
    </Modal>
  )
}
