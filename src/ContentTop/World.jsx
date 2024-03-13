import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'

export default function Scene() {
    const { nodes, scene, materials, animations } = useGLTF('wonderful_world/scene.gltf')
    const { ref, mixer, names, actions, clips } = useAnimations(animations)

    useEffect(() => {
        if (actions.Animation) {
            actions.Animation.play()
            mixer.timeScale = 0.5 // Reproduce la animación a la mitad de velocidad
        }
    }, [actions, mixer])

    return (
        <primitive object={scene} ref={ref} scale={1.1} />
    )
}
