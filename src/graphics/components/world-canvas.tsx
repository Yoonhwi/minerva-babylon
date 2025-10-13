import { useEffect, useRef, useState } from "react";
import { World } from "../core/world";
import { WorldContext } from "../context/world-context";

export function WorldCanvas({ children }: React.PropsWithChildren) {
  const [world, setWorld] = useState<World | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const world = new World(canvasRef.current);
    setWorld(world);

    return () => {
      world.dispose();
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
      {world && <WorldContext.Provider value={world}>{children}</WorldContext.Provider>}
    </>
  );
}
