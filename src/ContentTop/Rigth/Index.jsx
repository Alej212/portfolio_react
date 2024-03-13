import '../../assets/sass/_Rigth.scss'
import RotatingMesh from './Sphere'
import Box from './Box'
import Tube from './Tube'
import Cone from './Cone'
import Torus from './Torus'
//import Scene from './Linux'
import { Canvas } from '@react-three/fiber'

export default function Rigth() {
  return (
    <div className='rigth'>
        <div className='rigth_obj'>
        <Canvas className='rigth_canvas'>
          <Box />
        </Canvas>
        </div>
        <div className='rigth_obj'>
        <Canvas className='rigth_canvas'>
          <Torus />
        </Canvas>
        </div>
        <div className='rigth_obj'>
        <Canvas className='rigth_canvas'>
          <Cone />
        </Canvas>
        </div>
        <div className='rigth_obj'>
        <Canvas className='rigth_canvas'>
          <Tube />
        </Canvas>
        </div>
        <div className='rigth_obj'>
        <Canvas className='rigth_canvas'>
          <Box />
        </Canvas>
        </div>
        <div className='rigth_obj'>
        <Canvas className='rigth_canvas'>
          <RotatingMesh />
        </Canvas>
        </div>
    </div>
  )
}
