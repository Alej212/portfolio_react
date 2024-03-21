import '../assets/sass/_Middle.scss'
import { Icon } from '@iconify/react'
import { Canvas } from '@react-three/fiber'
import Scene from './World'

export default function Middle() {
  return (
    <div className='middle'>
      <div className='middle_top'>
        <div className='middle_user-content'>
          <div className='middle_user-img'></div>
          <div className="middle_user-info">
            <h3>
              Fullstack Developer <br />
              UI UX Designer <br />
              AI & AA & ML <br /> <br />
            </h3>
            <div className='middle_content-icon'>
              <Icon icon='bi:linkedin' className='middle_icon'></Icon>
              <Icon icon='bi:github' className='middle_icon'></Icon>
            </div>
          </div>
        </div>
      </div>
      <div className='middle_bottom'>
        <Canvas className='middle_canvas'>
          <pointLight position={[10, 0, 10]} />
          <Scene />
        </Canvas>
      </div>
    </div>
  )
}
