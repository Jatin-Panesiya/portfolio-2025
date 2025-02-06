"use client";
import React, { useState, useEffect } from "react";
import { gsap, CSSPlugin, Expo } from "gsap";
gsap.registerPlugin(CSSPlugin);

function App() {
  const [counter, setCounter] = useState<any>(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter: number) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    });
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline();
    t1.to(".follow", {
      height: "0%",
      ease: Expo.easeOut,
      duration: 10,
      top: "-100%",
    });
  };

  return (
    <div className="w-screen h-screen text-black relative">
      <div className="h-full w-full bg-[#121212] flex justify-center items-center absolute top-0">
        <div className="absolute bg-[#e9dfce] rounded-b w-screen h-screen left-0 z-10 follow text-7xl flex justify-center items-center font-bold">
          J.P.
        </div>
      </div>
    </div>
  );
}

export default App;
