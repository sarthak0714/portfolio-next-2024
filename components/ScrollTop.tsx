"use client";
import React, { useState, useEffect } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);
  const isBrowser = () => typeof window !== "undefined";
  function handleScroll() {
    if (typeof window !== "undefined" && window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowButton(false);
  }
  return (
    <div
      className={`fixed bottom-0 right-0 m-5 p-1.5 z-10 bg-black border-2 border-white md:hidden ${
        showButton ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <MdKeyboardDoubleArrowUp size={20} />
    </div>
  );
};

export default ScrollTop;
