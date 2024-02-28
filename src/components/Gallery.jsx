import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  useEffect(() => {
    gsap.to(document.querySelector(".gallery"), {
      opacity: 1,
      scrollTrigger: {
        trigger: document.querySelector(".gallery-trigger"),
        start: "center center%",
        end: "center top",
        scrub: 1,
      },
    });

    gsap.to(document.querySelector(".gallery__inner"), {
      x: "-101%",
      scrollTrigger: {
        trigger: document.querySelector(".gallery-trigger"),
        start: "center center%",
        end: 9000,
        scrub: 1,
      },
    });
  });

  let images = [];
  for (let i = 1; i < 34; i++) {
    images.push(i);
  }

  return (
    <div className="gallery">
      <div className="gallery__inner">
        {images.map((_, index) => {
          return (
            <img
              src={`images/${index}.jpg`}
              alt=""
              key={index}
              loading="lazy"
            />
          );
        })}
      </div>
    </div>
  );
}
