import { MeshBuilder } from "@babylonjs/core";
import { useEffect } from "react";

import { useWorld } from "../context/world-context";

export function Box() {
  const world = useWorld();

  useEffect(() => {
    if (!world) return;
    const box = MeshBuilder.CreateBox("box", { size: 1 }, world.scene);

    return () => {
      box.dispose();
    };
  }, [world]);

  return null;
}
