import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function RotatingMesh () {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y -= 0.01;
      meshRef.current.rotation.z -= 0.01;
    }
  });
  
  return (
    <mesh ref={meshRef} scale={1.3}>
      <cylinderGeometry args={[1, 1, 2.5, 32]}/>
      <meshBasicMaterial color={'rgb(15, 8, 30)'}/>
    </mesh>
  );
}
