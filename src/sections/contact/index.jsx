import gsap, { Power3 } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import coffeeImg from "../../assets/coffee.gif";
import socialData from "../../data/socials";
import Form from "./Form";

function Contact() {
  const styles = {
    title: "text-2xl font-semibold text-slate-700 dark:text-teal-100",
  };
  const containerRef = useRef();

  useLayoutEffect(() => {
    gsap.context(() => {
      gsap.fromTo(
        [
          ".section__right h1, .section__right p, .section__right a",
          ".section__left h1, .section__left label,.section__left input, .section__left textarea,.section__left button",
        ],
        {
          opacity: 0,
          y: 55,
        },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          stagger: 0.3,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 200px",
          },
        }
      );
    }, containerRef);
  }, []);

  return (
    <div className="py-20 dark:bg-darker" id="contact" ref={containerRef}>
      <div className="section lg:flex lg:justify-between">
        <div className="section__right md:w-2/3 lg:w-1/2">
          <h1 className={styles.title}>
            Have you got a project in your mind ? <br />
            Let&apos;s talk.
          </h1>
          <p className="text-gray-500 dark:text-gray-400 my-2 lg:mt-6 lg:mb-8">
          If you have any questions or inquiries, please do not hesitate to contact me.
          I enjoy helping others and I am always interested in new opportunities and
          collaborations. I appreciate your interest in me as a resource. I hope to hear from you soon! 
          </p>
          <span>
            <a
              href="mailto:ashokpds15@gmail.com"
              className="inline-flex items-center gap-4 font-semibold text-teal-600 dark:text-teal-300"
            >
              ashokpds15@gmail.com <BsArrowRight />
            </a>
          </span>
        </div>
        <div className="section__left mt-12 lg:mt-0 md:w-4/5 lg:w-2/5">
          <h1 className={styles.title}>
            Describe it here. <br />
            <span className="text-lg font-extralight text-teal-500 dark:text-teal-300 italic">
              Let&apos;s make it look as good as you want !
            </span>
          </h1>
          <Form />
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 gap-4">
        <div className="text-slate-500 dark:text-gray-400">
          <b>Thanks for scrolling</b> that is all!
        </div>
        <div className="flex gap-x-6 text-xl">
          {socialData.map((el, i) => (
            <a
              href={el.url}
              key={`icons-${i}`}
              className="text-teal-500 dark:text-teal-300"
            >
              <el.Icon />
            </a>
          ))}
        </div>
        <a
          href="https://www.buymeacoffee.com/ashokpds15"
          target="_blank"
          className="flex items-center gap-3 mt-3 bg-slate-900 dark:bg-transparent p-2 rounded-full"
          rel="noreferrer"
        >
          <div className="flex justify-center items-center bg-yellow-300 w-8 h-8 rounded-full">
            <img src={coffeeImg} alt="" className="w-9 max-w-max" />
          </div>
          <span className="text-yellow-300">buy me a coffee !</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
