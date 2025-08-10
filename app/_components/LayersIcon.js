"use client";

import { useRef, useEffect } from "react";
import { Player } from "@lordicon/react";
import { useMediaQuery } from "react-responsive";

const ICON = require("@/public/icons/layers.json");

export default function LayersIcon() {
  const playerRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
        size={isMobile ? 100 : 120}
      />
    </div>
  );
}
