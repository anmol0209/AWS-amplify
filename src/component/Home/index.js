import { Link } from 'react-router-dom'
import Logo from './Logo'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {
  return (
    <>
      <div className="conatiner">
        <div className="text-zone">
          <h1>
            Hii, <br />
            Anmol
            <br />
            Web developer
          </h1>
          <h2>Frontend developer/ Javascript Expert</h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
