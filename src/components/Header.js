import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
      <a href="/" className="fnt logo text-2xl font-bold text-accent">
        Pavana B S
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1aFl6_6TAADPai5hIHACM7322ykUVw5RF/view?usp=drive_link"
              target="_blank"
              without
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <a href="/#about" onClick={handleToggle}>About</a>
          </li>
          <li>
            <a href="/#projects" onClick={handleToggle}>Projects</a>
          </li>
          <li>
            <a href="/#contact" onClick={handleToggle}>Contact</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1aFl6_6TAADPai5hIHACM7322ykUVw5RF/view?usp=drive_link"
>Resume</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;
