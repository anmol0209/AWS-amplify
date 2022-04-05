import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LogoS from '../../assets/images/logo-s.png'

import {
  faEnvelope,
  faHomeAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
      </Link>

      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHomeAlt} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a href="" target="_blank">
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#4d4d4e"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#4d4d4e"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#4d4d4e"
            ></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
