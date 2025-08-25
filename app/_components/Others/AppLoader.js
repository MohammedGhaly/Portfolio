"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";

export default function AppLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    gsap.to(".loader", {
      x: "-100%",
      duration: 0.5,
      ease: "power1.inOut",
      onComplete: () => setLoading(false),
    });
  }, []);

  if (loading) {
    return (
      <div className="loader font-oswald fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center bg-black text-5xl font-bold text-white md:text-9xl">
        <h1 className="p-2 text-pink-500">LOADING...</h1>
      </div>
    );
  }
}
