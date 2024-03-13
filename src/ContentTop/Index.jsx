import '../assets/sass/_ContentTop.scss'
import Left from './Left'
import Middle from './Middle'
import Rigth from './Rigth/Index'

export default function index() {
  return (
    <div className="content-top">
      <Left />
      <Middle />
      <Rigth />
    </div>
  )
}
