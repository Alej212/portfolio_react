import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';

export default function Cone() {
    const meshRef = useRef();

    useFrame(() => {
      if (meshRef.current) {
        meshRef.current.rotation.y += 0.01;
        meshRef.current.rotation.z += 0.01;
      }
    });

    const gradient = useMemo(() => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
  
      const context = canvas.getContext('2d');
      const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop(0, 'rgba(19,8,27,1)');
      gradient.addColorStop(0.4, ' rgba(45,21,62,1)');
      gradient.addColorStop(0.8, 'rgba(47,12,68,1)');
      gradient.addColorStop(1, 'rgba(19,8,27,1)');
  
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
  
      return new THREE.CanvasTexture(canvas);
    }, []);
    
    return (
      <mesh ref={meshRef} scale={3} position={[0,0,0]}>
        <coneGeometry args={[0.5,1.5,32]} />
        <meshBasicMaterial map={gradient} />
      </mesh>
    );
}
