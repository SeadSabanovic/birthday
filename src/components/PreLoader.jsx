import gsap from "gsap";
import { useLayoutEffect } from "react";
import confetti from "canvas-confetti";

export default function PreLoader() {
  const handleConfetti = () => {
    confetti({
      particleCount: 250,
      spread: 120,
    });
  };

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.from(".pre-loader__count", {
      opacity: 0,
      scale: 0.8,
      rotate: 10,
      textContent: 0,
      duration: 3,
      ease: "expoScale(0.5,7,none)",
      snap: { textContent: 1 },
      stagger: 1,
      onComplete: () => handleConfetti(),
    }).to(".pre-loader", {
      delay: 2,
      autoAlpha: 0,
    });
  });

  return (
    <div className="pre-loader">
      <h1 className="pre-loader__count">25</h1>
    </div>
  );
}
