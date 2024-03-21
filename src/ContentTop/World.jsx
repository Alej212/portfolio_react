import { useGLTF, useAnimations } from '@react-three/drei'
import { useEffect } from 'react'

export default function Scene() {
    const { scene, animations } = useGLTF('wonderful_world/scene.gltf')
    const { ref, mixer, actions} = useAnimations(animations)

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
