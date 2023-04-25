import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

import { BsCodeSlash } from "react-icons/bs";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

function Card({ urls, tags, img, title }) {
  const containerRef = useRef();
  const ctx = useRef();
  const styles = {
    btn: "inline-flex items-center gap-2 text-teal-500 dark:text-teal-400 hover:text-teal-500 capitalize",
    primaryBtn:
      "inline-flex items-center gap-2 bg-teal-700 text-white dark:bg-opacity-80 py-2 px-4 font-medium rounded-full hover:bg-opacity-100 outline outline-1 outline-transparent focus:outline-teal-900 outline-offset-2 transition-all",
  };

  useLayoutEffect(() => {
    ctx.current = gsap.context((self) => {
      const img = gsap.utils.selector(containerRef.current)(
        ".img__container img"
      );
      self.add("imgHover", () => {
        gsap.to(img, {
          duration: 0.5,
          scale: 1.27,
        });
      });
      self.add("imgOut", () => {
        gsap.to(img, {
          duration: 0.27,
          scale: 1,
        });
      });
    }, containerRef);
  });
  return (
    <div
      ref={containerRef}
      className="card shrink-0 relative min-h-96 bg-white shadow dark:bg-slate-500 dark:bg-opacity-10 w-80 rounded-md overflow-hidden"
    >
      <div
        onMouseEnter={() => {
          if (ctx.current) ctx.current.imgHover();
        }}
        onMouseLeave={() => {
          if (ctx.current) ctx.current.imgOut();
        }}
        className="img__container relative h-[200px] bg-slate-700 rounded-b-md overflow-hidden"
      >
        <img src={img} alt="" className="object-cover h-full w-full" />
        <div className="absolute bottom-0 w-full h-2 bg-slate-900 opacity-30" />
      </div>
      <div className="py-4 px-4">
        <div className="flex justify-between items-baseline">
          <h1 className="text-lg capitalize dark:text-white font-medium">
            {title}
          </h1>
        </div>
        <div className="flex gap-3">
          {tags.map((tag) => (
            <span
              className="text-teal-500 dark:opacity-40 capitalize"
              key={`card-${tag}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-x-5 mb-2 mt-6">
          <a
            className={styles.primaryBtn}
            href={urls[0]}
            target="_blank"
            rel="noreferrer"
          >
            <HiArrowTopRightOnSquare /> live demo
          </a>
          <a
            className={styles.btn}
            href={urls[1]}
            target="_blank"
            rel="noreferrer"
          >
            <BsCodeSlash /> source code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
