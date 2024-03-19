import '../assets/sass/_Left.scss'
import { Icon } from '@iconify/react'
import { useState, useEffect } from 'react'
// import { fetchData } from '../utils/Api'

export default function Left() {
  const images = [['ecommerce.webp','Ecommerce',import.meta.env.VITE_ECOMMERCE_ROUTE],['moviesweb.webp', 'Moviepage', import.meta.env.VITE_MOVIEPAGE_ROUTE]];
  const [imageIndex, setImageIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const imageFile = images[imageIndex][0]; // Obtiene el archivo de la imagen
  const projectName = images[imageIndex][1]; // Obtiene el nombre del proyecto
  const projectRoute = images[imageIndex][2]; // Obtiene la ruta del proyecto

  return (
    <div className='left'>
      <div className='left_content-img'>
        <img src={imageFile} loading='lazy' alt="" className='left_img' />
        <div className='left_img-cap'></div>
      </div>
      <div className='left_name-project-content'>
        <div className='left_name-project'>
          <h5>{projectName}</h5>
        </div>
        <div className='left_content-icon'>
          <a href={projectRoute} target="_blank" rel="noopener noreferrer"> {/* Añade un enlace al icono */}
            <Icon icon='charm:link-external' className='left_icon'></Icon>
          </a>
        </div>
      </div>
      <div className='left_project-dot'>
        <div className={`left_dot ${imageIndex === 0 ? 'active' : ''}`}></div>
        <div className={`left_dot ${imageIndex === 1 ? 'active' : ''}`}></div>
      </div>
    </div>
  )
}
