import React from "react";

function Warpper({ children, className, ...rest }, ref) {
  return (
    <div
      ref={ref}
      className={`${
        className ? className : ""
      }  relative inline-block self-start`}
      {...rest}
    >
      <div className="slide-left absolute block w-full h-full bg-white"></div>
      <div className="slide-left absolute block w-full h-full bg-teal-300"></div>
      <div>{children}</div>
    </div>
  );
}

const AnimatedWrapper = React.forwardRef(Warpper);

export default AnimatedWrapper;
