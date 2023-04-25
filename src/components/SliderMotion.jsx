import React, { useLayoutEffect, useRef } from "react";
import hoverEffect from "../utils/hoverEffect";

import bg2 from "../assets/bg2.jpg";
import bg1 from "../assets/bg1.jpg";
import distortionImg from "../assets/14.jpg";

function SliderMotion() {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    new hoverEffect({
      parent: containerRef.current,
      image1: bg1,
      image2: bg2,
      displacementImage: distortionImg,
    });
  }, []);
  return (
    <div ref={containerRef} className="absolute w-full h-full">
      <img src={bg1} className="absolute h-full w-full" />
      <img src={bg2} className="absolute h-full w-full" />
    </div>
  );
}

export default SliderMotion;
