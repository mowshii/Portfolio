import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

function damp(current: number, target: number, lambda: number, dt: number) {
  return THREE.MathUtils.damp(current, target, lambda, dt);
}

function SidekickBot({ speaking }: { speaking: boolean }) {
  const root = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);
  const leftPupil = useRef<THREE.Mesh>(null);
  const rightPupil = useRef<THREE.Mesh>(null);
  const gem = useRef<THREE.Mesh>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const cream = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#f4eee6",
        roughness: 0.38,
        metalness: 0.08,
      }),
    [],
  );
  const hair = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#2a231c",
        roughness: 0.72,
        metalness: 0.04,
      }),
    [],
  );
  const metal = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#c4b199",
        roughness: 0.28,
        metalness: 0.55,
      }),
    [],
  );
  const ink = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#2c2622", roughness: 0.4 }),
    [],
  );
  const white = useMemo(
    () => new THREE.MeshStandardMaterial({ color: "#fbf8f4", roughness: 0.25 }),
    [],
  );
  const purple = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#6b5b73",
        roughness: 0.3,
        metalness: 0.2,
        emissive: "#6b5b73",
        emissiveIntensity: 0.18,
      }),
    [],
  );

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.1);
    const t = performance.now() / 1000;
    if (root.current) {
      root.current.position.y = Math.sin(t * 1.15) * 0.1;
      root.current.rotation.z = Math.sin(t * 0.7) * 0.04;
    }
    const px = pointer.current.x;
    const py = pointer.current.y;
    if (head.current) {
      head.current.rotation.y = damp(head.current.rotation.y, px * 0.45, 4, dt);
      head.current.rotation.x = damp(head.current.rotation.x, -py * 0.22, 4, dt);
    }
    const lookX = px * 0.02;
    const lookY = py * 0.016;
    if (leftPupil.current) {
      leftPupil.current.position.x = -0.11 + lookX;
      leftPupil.current.position.y = 0.04 + lookY;
    }
    if (rightPupil.current) {
      rightPupil.current.position.x = 0.11 + lookX;
      rightPupil.current.position.y = 0.04 + lookY;
    }
    if (gem.current) {
      const mat = gem.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = speaking ? 0.55 + Math.sin(t * 6) * 0.15 : 0.18;
    }
  });

  return (
    <group ref={root} position={[0, -0.05, 0]} scale={1.05}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.05, 0]}>
        <circleGeometry args={[0.52, 28]} />
        <meshBasicMaterial color="#c4b199" transparent opacity={0.28} />
      </mesh>

      <mesh position={[0, -0.42, 0]} material={cream}>
        <capsuleGeometry args={[0.3, 0.38, 8, 20]} />
      </mesh>
      <mesh ref={gem} position={[0, -0.22, 0.29]} material={purple}>
        <circleGeometry args={[0.07, 20]} />
      </mesh>
      <mesh position={[0, -0.55, 0.28]} material={metal}>
        <boxGeometry args={[0.22, 0.035, 0.04]} />
      </mesh>

      <mesh position={[-0.38, -0.38, 0]} rotation={[0, 0, 0.4]} material={cream}>
        <capsuleGeometry args={[0.07, 0.28, 6, 12]} />
      </mesh>
      <mesh position={[0.38, -0.38, 0]} rotation={[0, 0, -0.4]} material={cream}>
        <capsuleGeometry args={[0.07, 0.28, 6, 12]} />
      </mesh>

      <group ref={head} position={[0, 0.34, 0]}>
        <mesh material={cream}>
          <sphereGeometry args={[0.34, 32, 32]} />
        </mesh>
        <mesh position={[0, 0.16, -0.05]} material={hair} scale={[1.05, 0.78, 1.08]}>
          <sphereGeometry args={[0.34, 28, 28]} />
        </mesh>
        <mesh position={[0.22, 0.12, 0.02]} rotation={[0.2, 0.4, -0.4]} material={hair}>
          <sphereGeometry args={[0.14, 16, 16]} />
        </mesh>
        <mesh position={[-0.22, 0.12, 0.02]} rotation={[0.2, -0.4, 0.4]} material={hair}>
          <sphereGeometry args={[0.14, 16, 16]} />
        </mesh>
        <mesh position={[0, 0.08, 0.26]} scale={[0.95, 0.28, 0.4]} material={hair}>
          <sphereGeometry args={[0.22, 16, 16]} />
        </mesh>

        <mesh position={[-0.11, 0.04, 0.28]} material={white}>
          <sphereGeometry args={[0.075, 16, 16]} />
        </mesh>
        <mesh position={[0.11, 0.04, 0.28]} material={white}>
          <sphereGeometry args={[0.075, 16, 16]} />
        </mesh>
        <mesh ref={leftPupil} position={[-0.11, 0.04, 0.345]} material={ink}>
          <sphereGeometry args={[0.032, 12, 12]} />
        </mesh>
        <mesh ref={rightPupil} position={[0.11, 0.04, 0.345]} material={ink}>
          <sphereGeometry args={[0.032, 12, 12]} />
        </mesh>
        <mesh position={[0, -0.06, 0.325]} material={metal}>
          <boxGeometry args={[0.08, 0.018, 0.03]} />
        </mesh>

        <mesh position={[0, 0.4, 0]} material={metal}>
          <cylinderGeometry args={[0.012, 0.012, 0.2, 10]} />
        </mesh>
        <mesh position={[0, 0.52, 0]} material={purple}>
          <sphereGeometry args={[0.042, 14, 14]} />
        </mesh>
      </group>
    </group>
  );
}

export function Avatar3D({
  onActivate,
  speaking,
}: {
  onActivate: () => void;
  speaking: boolean;
}) {
  return (
    <Canvas
      camera={{ position: [0, 0.15, 3.15], fov: 32 }}
      dpr={[1, 1.6]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
      style={{ width: "100%", height: "100%", display: "block", cursor: "pointer" }}
      onClick={onActivate}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[2.4, 3.2, 4]} intensity={1.15} color="#fff6ea" />
      <directionalLight position={[-2.2, 0.8, 2]} intensity={0.35} color="#c9b8ce" />
      <SidekickBot speaking={speaking} />
    </Canvas>
  );
}
