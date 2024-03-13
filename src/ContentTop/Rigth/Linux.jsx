import { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export default function Scene() {
    const { nodes, scene, materials, animations } = useGLTF('linux-char/scene.gltf')
    const ref = useRef()

    // useFrame(() => {
    //     if (ref.current) {
    //         ref.current.rotation.y += 0.018;
    //     }
    // })

    return (
        <primitive object={scene} ref={ref} scale={10} position={[0,0,0]} />
  )
}
