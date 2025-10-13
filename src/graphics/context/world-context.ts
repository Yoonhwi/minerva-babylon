import { createContext, useContext } from "react";
import { World } from "../core/world";

export const WorldContext = createContext<World | null>(null);

export function useWorld() {
  const world = useContext(WorldContext);

  if (!world) {
    throw new Error("World not found");
  }

  return world;
}
