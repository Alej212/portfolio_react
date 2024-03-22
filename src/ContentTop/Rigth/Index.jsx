import '../../assets/sass/_Rigth.scss'
import { Canvas } from '@react-three/fiber'
import Box from './Box.jsx'
import Tube from './Tube.jsx'
import Torus from './Torus.jsx'
import Cone from './Cone.jsx'
import Sphere from './Sphere.jsx'

export default function Rigth() {
  return (
    <div className='rigth'>
        <div className='rigth_obj'>
          <Canvas>
            <Box></Box>
          </Canvas>
        </div>
        <div className='rigth_obj'>
          <Canvas>
            <Tube></Tube>
          </Canvas>
        </div>
        <div className='rigth_obj'>
          <Canvas>
            <Torus></Torus>
          </Canvas>
        </div>
        <div className='rigth_obj'>
          <Canvas>
            <Box></Box>
          </Canvas>
        </div>
        <div className='rigth_obj'>
          <Canvas>
            <Sphere />
          </Canvas>
        </div>
        <div className='rigth_obj'>
          <Canvas>
            <Cone />
          </Canvas>
        </div>
    </div>
  )
}
