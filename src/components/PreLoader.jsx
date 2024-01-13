import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function PreLoader() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.from(".pre-loader__count", {
      textContent: 0,
      duration: 4,
      ease: "expoScale(0.5,7,none)",
      snap: { textContent: 1 },
      stagger: 1,
    });
  });

  return (
    <div className="pre-loader">
      <h1 className="pre-loader__title">ELMA</h1>
      <h1 className="pre-loader__count">25</h1>
    </div>
  );
}
