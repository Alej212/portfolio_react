import '../assets/sass/_Skills.scss'
import { Icon } from '@iconify/react'

export default function Skills() {
  return (
    <div className='skills'>
        <div className='skills_card'>
            <h4>Backend</h4>
            <div className='skills_content-icon'>
                <Icon icon='cib:postgresql' className='skills_icon'></Icon>
                <Icon icon='cib:redis' className='skills_icon'></Icon>
                <Icon icon='cib:mongodb' className='skills_icon'></Icon>
                <Icon icon='simple-icons:supabase' className='skills_icon'></Icon>
                <Icon icon='mdi:firebase' className='skills_icon'></Icon>
                <Icon icon='akar-icons:node-fill' className='skills_icon'></Icon>
                <Icon icon='cib:django' className='skills_icon'></Icon>
            </div>
        </div>
        <div className='skills_card'>
            <h4>Frontend</h4>
            <div className='skills_content-icon'>
                <Icon icon='cib:ionic' className='skills_icon'></Icon>
                <Icon icon='simple-icons:vite' className='skills_icon'></Icon>
                <Icon icon='cib:vue-js' className='skills_icon'></Icon>
                <Icon icon='akar-icons:react-fill' className='skills_icon'></Icon>
                <Icon icon='simple-icons:nuxtdotjs' className='skills_icon'></Icon>
                <Icon icon='fa-brands:sass' className='skills_icon'></Icon>
                <Icon icon='ri:tailwind-css-fill' className='skills_icon'></Icon>
                <Icon icon='ri:bootstrap-fill' className='skills_icon'></Icon>
                <Icon icon='tabler:brand-threejs' className='skills_icon'></Icon>
            </div>
        </div>
        <div className='skills_card'>
            <h4>Tools</h4>
            <div className='skills_content-icon'>
                <Icon icon='bi:git' className='skills_icon-xl'></Icon>
                <Icon icon='devicon-plain:docker-wordmark' className='skills_icon-xl'></Icon>
                <Icon icon='fa6-brands:linux' className='skills_icon-xl'></Icon>
                <Icon icon='cib:nginx' className='skills_icon-xl'></Icon>
            </div>
        </div>
    </div>
  )
}
