import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Cone() {
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
      <mesh ref={meshRef} scale={2.2} position={[0,0,0]}>
        <coneGeometry args={[0.5,1.5,32]} />
        <meshNormalMaterial/>
      </mesh>
    );
}
