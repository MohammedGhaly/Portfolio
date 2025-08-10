"use client";

import { useRef, useEffect } from "react";
import { Player } from "@lordicon/react";
import { useMediaQuery } from "react-responsive";

const ICON = require("@/public/icons/code.json");

export default function CodeIcon() {
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
        size={isMobile ? 90 : 120}
      />
    </div>
  );
}
