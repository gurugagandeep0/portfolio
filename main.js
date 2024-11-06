import gsap from "gsap";
import "./style.css";

// TWEENS
/* 
to
from
fromTo
*/

// gsap.to(".box1", {
//   x: 400,
//   duration: 2,
//   repeat: -1,
//   yoyo: true,
//   ease: "power4.inOut",
// });

// gsap.fromTo(
//   ".box1",
//   {
//     x: 0,
//   },
//   {
//     x: 400,
//     duration: 4,
//     ease: "bounce.in",
//   }
// );

// const timeline = gsap.timeline();

// timeline
//   .to(".box1", {
//     x: 400,
//     duration: 5,
//     rotation: 360,
//   })
//   .to(".box2", {
//     x: 500,
//     duration: 5,
//     rotation: -360,
//   });

gsap.to(
  {},
  {
    duration: 5,
    ease: "power3.inOut",
    repeat: -1,
    onUpdate: function () {
      const angle = Date.now() / 1000;
      const radius = 200;

      gsap.set(".box1", {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle),
      });
    },
  }
);
