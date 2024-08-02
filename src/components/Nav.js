import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import { useRef, useState, useEffect } from "react";

const Nav = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Close the dropdown menu if clicked outside
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="py-8 px-4 relative flex items-center justify-between">
      {/* Logo */}
      <div className=" w-[35%] md:w-[20%]">
        <img className="w-[100%]" src={logo} alt="sunnyside logo" />
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div
          className="w-[80%] absolute top-[100%] left-14 sm:left-20 bg-white md:hidden"
          ref={ref}
        >
          <ul className="flex flex-col items-center justify-between p-4">
            <a href="/">
              <li className="my-2">About</li>
            </a>
            <a href="/">
              <li className="my-2">Services</li>
            </a>
            <a href="/">
              <li className="my-2">Projects</li>
            </a>
            <a href="/">
              <button className="my-2 bg-yellow text-veryDarkDesaturatedBlue py-2 px-4 rounded-3xl">
                CONTACT
              </button>
            </a>
          </ul>
        </div>
      )}

      {/* Navigation Menu for Desktop */}
      <div className="hidden md:block">
        <ul className="flex items-center justify-between text-white">
          <a href="/">
            <li className="mx-4">About</li>
          </a>
          <a href="/">
            <li className="mx-4">Services</li>
          </a>
          <a href="/">
            <li className="mx-4">Projects</li>
          </a>
          <a href="/">
            <button className="my-2 bg-white text-veryDarkDesaturatedBlue py-2 px-4 rounded-3xl hover:bg-opacity-30 hover:text-white hover:border-0">
              CONTACT
            </button>
          </a>
        </ul>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div onClick={toggleDropdown} className="cursor-pointer md:hidden">
        <img src={hamburger} alt="hamburger icon" />
      </div>
    </nav>
  );
};

export default Nav;
