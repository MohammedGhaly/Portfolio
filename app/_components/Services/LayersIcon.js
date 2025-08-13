"use client";

import { useRef, useEffect, useState } from "react";
import { Player } from "@lordicon/react";

const ICON = require("@/public/icons/layers.json");

export default function LayersIcon() {
  const [size, setSize] = useState(120);
  const playerRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSize(100);
    }
  }, []);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return (
    <div>
      <Player
        ref={playerRef}
        icon={ICON}
        onComplete={() => {
          setTimeout(() => {
            playerRef.current?.playFromBeginning();
          }, 1000);
        }}
        size={size}
      />
    </div>
  );
}
