import React, { useLayoutEffect, useRef } from "react";

import Card from "./card";
import projects from "../../data/projects";
import gsap, { Power1 } from "gsap";

function Work() {
  const containerRef = useRef();
  useLayoutEffect(() => {
    gsap.context(() => {
      gsap.fromTo(
        ".section__header h1, .section__header h3, .card",
        {
          opacity: 0,
          y: 120,
        },
        {
          duration: 1,
          opacity: 1,
          y: 0,
          stagger: 0.3,
          ease: Power1.easeOut,
          scrollTrigger: {
            trigger: ".section__header",
            start: "top 200px",
          },
        }
      );
    }, containerRef);
  }, []);
  return (
    <div id="project" ref={containerRef}>
      <section className="section">
        <div className="section__header lg:w-3/5 mb-10">
          <h1 className="text-2xl tracking-widest">Latest Work.</h1>
          <h3 className="text-gray-500">View my recent works</h3>
        </div>
        <div className="card--group flex flex-wrap gap-x-2 gap-y-6 mt-4 justify-center lg:justify-start">
          {projects.map((val) => (
            <Card
              img={val.img}
              tags={val.tags}
              urls={val.urls}
              content={val.content}
              title={val.title}
              key={val.title}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Work;
