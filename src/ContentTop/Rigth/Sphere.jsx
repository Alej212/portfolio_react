import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function RotatingMesh () {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.018;
    }
  });

  return (
    <mesh ref={meshRef} scale={2}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color={'rgb(15, 8, 30)'}/>
    </mesh>
  );
}
