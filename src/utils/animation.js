import gsap, { Power3, Sine } from "gsap"

export const slideTop = (target, duration) => {
  return gsap.fromTo(target, {
    duration,
  }, {
    opacity: 1,
    translateY: 0
  })
}

export const animateWrapper = (target) => {
  const tl = gsap.timeline();
  const q = gsap.utils.selector(target);
  const animation = {
    duration: 1,
    width: 0,
    ease: Power3.easeInOut,
  };
  tl.fromTo(target, {
    opacity: 0
  }, {opacity: 1, 
    duration: .001,
  }).
  to(q("div:nth-child(2)"), animation).to(
    q("div:nth-child(1)"),
    animation,
    "-=.897"
  );
  return tl
}

export const staggerFromLeft = (target) => {
  return gsap.fromTo(target, {
    duration: .5,
    opacity: 0,
    x: 50,
    y: 10
  }, { opacity: 1, x: 0, y:0, stagger: .3, ease: Sine.easeInOut
   })
}

export const staggerFromBottom = (target)  => {
  return gsap.fromTo(target, {
    opacity: 0,
    y: 35,
  }, {
    duration: .5,
    opacity: 1,
    y: 0,
    stagger: .1,
    ease: Sine.easeOut
  })
}