import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function RotatingMesh () {
  const meshRef = useRef();
  const [time, setTime] = useState(0);

  useFrame((state, delta) => {
    if (meshRef.current) {
      setTime(time + delta);
      meshRef.current.position.y = Math.sin(time);
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshNormalMaterial/>
    </mesh>
  );
}
