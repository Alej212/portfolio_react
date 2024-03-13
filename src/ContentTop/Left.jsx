import '../assets/sass/_Left.scss'
import { Icon } from '@iconify/react'

export default function Left() {
  return (
    <div className='left'>
      <div className='left_content-img'>
        <img src="" alt="" className='left_img' />
      </div>
      <div className='left_name-project-content'>
        <div className='left_name-project'>
          <h5>name project</h5>
        </div>
        <div className='left_content-icon'>
          <Icon icon='charm:link-external' className='left_icon'></Icon>
        </div>
      </div>
      <div className='left_project-dot'>
        <div className='left_dot'></div>
      </div>
    </div>
  )
}
