import { useEffect, useRef } from "react";

export default function HomeHero() {
  const followerRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;
    const hero = heroRef.current;

    const handleMouseEnter = () => {
      follower.style.display = "block";
    };

    const handleMouseLeave = () => {
      follower.style.display = "none";
    };

    const handleMouseMove = (e) => {
      const { left, top } = hero.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY;
      follower.style.transform = `translate(${x-25}px, ${y-25}px)`;
    };

    hero.addEventListener("mouseenter", handleMouseEnter);
    hero.addEventListener("mouseleave", handleMouseLeave);
    hero.addEventListener("mousemove", handleMouseMove);

    return () => {
      hero.removeEventListener("mouseenter", handleMouseEnter);
      hero.removeEventListener("mouseleave", handleMouseLeave);
      hero.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="home-hero font-x" ref={heroRef}>
      <div className="cursor-follower" ref={followerRef}></div>
      <div className="sm-text">Bringing a new lens to</div>
      <div className="deco-text">Travel. Hospitality and Luxury</div>
    </div>
  );
}
