"use client";

import { useState } from "react";
import ValentineIntro from "@/components/ValentineIntro";
import ValentineHero from "@/components/ValentineHero";

export default function Home() {
  const [showHero, setShowHero] = useState(false);

  return showHero ? (
    <ValentineHero />
  ) : (
    <ValentineIntro onYes={() => setShowHero(true)} />
  );
}
