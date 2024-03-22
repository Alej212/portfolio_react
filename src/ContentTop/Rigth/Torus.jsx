import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Torus () {
  const meshRef = useRef();
  const [time, setTime] = useState(0);


  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z -= 0.01;
      setTime(time + delta);
      meshRef.current.position.y = Math.sin(time);
    }
  });
  
  return (
    <mesh ref={meshRef} scale={1.3} position={[0,0,0]}>
      <torusGeometry />
      <meshNormalMaterial/>
    </mesh>
  );
}
