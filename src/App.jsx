import './assets/sass/_App.scss'
import ContentTop from './ContentTop/Index'
import ContentBottom from './ContentBottom/Index'

export default function App() {
  return (
    <>
    <div className="background"></div>
    <div className='content-body'>
      <h2>HI, WELCOME TO MY HOME PAGE</h2>
      <div className='content-body_content'>
        <ContentTop />
        <ContentBottom />
      </div>
    </div>
    </>
  )
}
