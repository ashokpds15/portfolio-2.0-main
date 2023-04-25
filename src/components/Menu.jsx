import React, { useContext } from "react";
import { Menu, Transition } from "@headlessui/react";

import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { themeContext } from "../theme";

function MenuContainer() {
  const links = ["about", "skills", "project", "contact"];
  const { theme, toggleTheme } = useContext(themeContext);

  return (
    <div className="sm:hidden">
      <Menu as="div">
        {({ open }) => (
          <>
            <div>
              <Menu.Button
                className={`hamburger hamburger--elastic ${
                  open ? "is-active" : ""
                }`}
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </Menu.Button>
            </div>

            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="fixed z-10 right-0 mt-2 w-72 mr-4 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[#192229]">
                <div className="px-3 py-3 ">
                  {links.map((link) => (
                    <Menu.Item key={link}>
                      {({ active }) => (
                        <a
                          href={`#${link}`}
                          className={`${
                            active
                              ? "bg-teal-700 bg-opacity-90 text-white"
                              : "text-teal-700 dark:text-teal-200"
                          } group flex w-full items-center rounded-md px-2 py-2 text-lg capitalize font-mono transition`}
                        >
                          {link}
                        </a>
                      )}
                    </Menu.Item>
                  ))}

                  <Menu.Item className="p-1 pt-3 flex justify-between" as="div">
                    <a className="capitalize cursor-pointer py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border-2 border-teal-700 text-teal-700 hover:text-white hover:bg-teal-800 hover:border-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-800 focus:ring-offset-2 transition-all dark:hover:bg-teal-900 dark:border-teal-900 dark:hover:border-teal-900 dark:text-teal-700 dark:font-mono dark:focus:ring-gray-900 dark:focus:ring-offset-teal-800 dark:hover:text-white">
                      resume
                    </a>
                    <button
                      onClick={toggleTheme}
                      className="text-2xl text-teal-500"
                    >
                      {theme == "light" ? <BsSunFill /> : <BsMoonStarsFill />}
                    </button>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}

export default MenuContainer;
