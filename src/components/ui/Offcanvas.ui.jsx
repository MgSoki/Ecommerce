// Offcanvas.js
import React, { useEffect } from "react";
import { Cart } from "@/components/cart";

const Offcanvas = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <div
      className={`fixed z-[40] inset-0 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-neutral-900 opacity-70"></div>
      <div className="fixed inset-y-0 min-w-full right-0 flex items-center">
        {/* Offcanvas Content */}
        <Cart onClose={onClose} />
      </div>
    </div>
  );
};

export default Offcanvas;
