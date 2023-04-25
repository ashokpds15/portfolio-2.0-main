import gsap, { Bounce } from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";

function Notice({ value, visible, onHidden }) {
  const $timer = useRef(null);
  const parentEl = useRef(null);
  const tl = useRef(null);

  useLayoutEffect(() => {
    if (visible) {
      $timer.current = window.setTimeout(() => {
        tl.current.reverse().then(onHidden);
        onHidden();
      }, 2000);
      gsap.context(() => {
        tl.current = gsap.timeline();
        if (value.status == "good") {
          tl.current.fromTo(
            ".notify",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0 }
          );
        } else if (value.status == "warn") {
          tl.current.fromTo(
            ".notify",
            { opacity: 0 },
            { duration: 1, opacity: 1, ease: Bounce.easeIn }
          );
        }
      }, parentEl);
    }

    return () => {
      if ($timer.current) {
        window.clearTimeout($timer.current);
      }
    };
  }, [visible]);

  return (
    <div className="flex justify-center h-20" ref={parentEl}>
      {visible && value.status == "good" ? (
        <div className="notify flex items-center gap-2 text-teal-500">
          <BsFillPatchCheckFill className="notify__icon" />
          <span className="text-base notify__text"> {value.message}</span>
        </div>
      ) : null}

      {visible && value.status == "warn" ? (
        <div className="notify flex items-center gap-2 text-yellow-400">
          <FiAlertTriangle className="notify__icon" />
          <span className="text-base notify__text">{value.message}</span>
        </div>
      ) : null}
    </div>
  );
}

export default Notice;
