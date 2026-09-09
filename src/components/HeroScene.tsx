import { useEffect, useState, type ComponentType } from "react";
import { useReducedMotion } from "@/lib/hooks";

type SceneProps = {
  onActivate: () => void;
  speaking: boolean;
};

export function HeroScene(props: SceneProps) {
  const reduced = useReducedMotion();
  const [Scene, setScene] = useState<ComponentType<SceneProps> | null>(null);

  useEffect(() => {
    if (reduced) return;
    let live = true;
    void import("./Avatar3D").then((mod) => {
      if (live) setScene(() => mod.Avatar3D);
    });
    return () => {
      live = false;
    };
  }, [reduced]);

  if (reduced || !Scene) {
    return (
      <div className="grid h-full w-full place-items-center" aria-hidden="true">
        <div className="relative h-24 w-20">
          <div className="absolute inset-x-5 top-8 h-10 rounded-full bg-sand" />
          <div className="absolute inset-x-4 top-2 h-10 rounded-full bg-paper shadow-sm" />
          <div className="absolute left-1/2 top-0 h-3 w-1 -translate-x-1/2 bg-metal" />
          <div className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1 rounded-full bg-accent" />
        </div>
      </div>
    );
  }

  return <Scene {...props} />;
}
