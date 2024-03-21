import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Torus () {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x -= 0.01;
    }
  });
  
  return (
    <mesh ref={meshRef} scale={1.8} position={[0,0,0]}>
      <torusGeometry />
      <meshBasicMaterial color={'rgb(15, 8, 30)'}/>
    </mesh>
  );
}
