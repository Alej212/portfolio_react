import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Cone() {
    const meshRef = useRef();

    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.01;
        meshRef.current.rotation.z += 0.01;
      }
    });
    
    return (
      <mesh ref={meshRef} scale={3} position={[0,0,0]}>
        <coneGeometry args={[0.5,1.5,32]} />
        <meshBasicMaterial color={'rgb(15, 8, 30)'}/>
      </mesh>
    );
}
