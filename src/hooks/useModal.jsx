import React from "react";

export default function useModal() {
  const [isOpen, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const toggle = () => setOpen(!isOpen);
  return {openModal, closeModal, toggle};
}
