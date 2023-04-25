import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import {
  animateWrapper,
  staggerFromLeft,
  staggerFromBottom,
} from "../../utils/animation";
import socialData from "../../data/socials";
import AnimatedWrapper from "../../components/AnimatedWrapper";

function Header() {
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const lineRef = useRef(null);
  const socialsIconRef = useRef(null);
  const sideContentRef = useRef(null);

  useLayoutEffect(() => {
    const animationTimeline = gsap.timeline({ delay: 1.3 });
    const iconsTarget = gsap.utils.selector(socialsIconRef.current)("a");
    const sideContentEls = sideContentRef.current.children;

    const h1 = animateWrapper(h1Ref.current);
    const h2 = animateWrapper(h2Ref.current);
    const link = staggerFromLeft(iconsTarget);
    const leftSide = staggerFromBottom(sideContentEls);

    animationTimeline
      .add(["h1-label", h1])
      .add(h2, "-=.9")
      .fromTo(
        lineRef.current,
        {
          scaleX: 0,
        },
        { scaleX: 1 },
        "-=.2"
      )
      .add(link)
      .add(leftSide, "h1-label");
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden dark:bg-hero dark:bg-no-repeat dark:bg-cover">
      <div className="relative min-h-screen text-slate-500 dark:text-slate-200 dark:bg-gray-900 dark:opacity-80">
        <div className="section">
          <div className="flex flex-col lg:flex-row justify-between align-top mt-32">
            <div>
              <h1 className="flex flex-col gap-4 text-6xl capitalize w-1/2 font-thin text-slate-600 dark:text-white">
                <AnimatedWrapper ref={h1Ref}>lourvens</AnimatedWrapper>
                <AnimatedWrapper ref={h2Ref} className="tracking-[0.3em]">
                  luxamar.
                </AnimatedWrapper>
                <hr
                  className="my-2 ml-1 w-48 h-2 bg-teal-500 border-none origin-top-left"
                  ref={lineRef}
                />
              </h1>
              <div
                className="flex mt-8 lg:mt-16 gap-8 dark:text-white text-3xl"
                ref={socialsIconRef}
              >
                {socialData.map((el, i) => (
                  <a
                    href={el.url}
                    key={`card-${i}`}
                    className="hover:text-teal-500 dark:hover:text-teal-300 transform"
                  >
                    <el.Icon />
                  </a>
                ))}
              </div>
            </div>
            <div className="sm:w-6/12 mt-12 sm:mt-0" ref={sideContentRef}>
              <h1 className="max-w-md text-3xl font-semibold my-3 lg:my-4 font-header">
                Hello, I&apos;m a creative{" "}
                <span className="text-teal-500">Full-stack Developer.</span>
              </h1>
              <p className="max-w-md dark:text-gray-200">
                I am a passionate Frontend Developer who is currently expanding
                my skills to Backend Development. My tech stack includes React,
                TailwindCSS, and TypeScript. I am constantly seeking new
                challenges and opportunities to learn and improve my programming
                skills.
                <br /> <br /> With my dedication and passion for programming, I
                am confident that I can create compelling and visually appealing
                web applications that meet the needs of clients and users alike.
              </p>
              <a
                href="#contact"
                className="inline-block px-4 py-2 my-2 text-white font-bold bg-teal-600 rounded border hover:bg-opacity-80 dark:hover:bg-transparent transition"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
