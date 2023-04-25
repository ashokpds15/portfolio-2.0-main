import gsap from "gsap";
import React, { useContext, useLayoutEffect, useRef } from "react";
import logoImg from "../assets/logo-2.svg";
import { themeContext } from "../theme";

import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import Menu from "./Menu";

function Navbar() {
  const { theme, toggleTheme } = useContext(themeContext);
  const logoRef = useRef(null);
  const linksRef = useRef([]);

  const styles = {
    link: "text-xl first-letter:capitalize",
  };

  const Link = ({ href, children }) => (
    <a
      href={href}
      className="text-teal-600 dark:text-teal-200 hover:text-teal-500 group relative"
    >
      {children}
      <span className="absolute w-0 h-0.5 bg-teal-500 left-0 bottom-1.5 group-hover:w-full transition-all duration-300" />
    </a>
  );

  useLayoutEffect(() => {
    const tl = gsap.timeline();
    const q = gsap.utils.selector(linksRef);
    tl.fromTo(
      logoRef.current,
      { duration: 0.4, opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
      }
    ).fromTo(
      q("li"),
      {
        duration: 0.4,
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
      },
      "-=.1"
    );
  }, []);
  return (
    <nav className="px-4 py-6 max-w-5xl fixed sm:absolute sm:bg-transparent top-0 z-50 w-full flex justify-between items-center bg-teal-900 bg-opacity-5 backdrop-blur-md sm:left-1/2 transform sm:-translate-x-1/2">
      <a href="#" ref={logoRef}>
        <img src={logoImg} alt="" className="w-12" />
      </a>
      <ul className="sm:flex sm:gap-x-10 lg:gap-x-16 hidden" ref={linksRef}>
        <li className={styles.link}>
          <Link href="#about" className="active">
            about me
          </Link>
        </li>
        <li className={styles.link}>
          <Link href="#skills">skills</Link>
        </li>

        <li className={styles.link}>
          <Link href="#project">projects</Link>
        </li>

        <li className={styles.link}>
          <Link href="#contact">contact</Link>
        </li>
        <li>
          <button onClick={toggleTheme} className="text-2xl text-teal-500">
            {theme == "light" ? <BsSunFill /> : <BsMoonStarsFill />}
          </button>
        </li>
      </ul>
      <Menu />
    </nav>
  );
}

export default Navbar;
