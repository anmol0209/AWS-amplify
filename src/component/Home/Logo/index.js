import Loader from 'react-loaders'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  return (
    <>
      <div className="Logo-container">
        <img className="solid-logo" src={LogoS} alt="Logo Name" />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Logo
