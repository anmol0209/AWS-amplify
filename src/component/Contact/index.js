import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import Loader from 'react-loaders'

import './index.scss'

const Contact = () => {
  const iframe =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6770126909523!2d77.59362651433324!3d12.864125820709239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ac537cfe1ef%3A0x4699f24e4460abe4!2sPrabhavathi%20Meadows!5e0!3m2!1sen!2sin!4v1649076748212!5m2!1sen!2sin" width="100%" height= "100vh" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }}
      />
    )
  }

  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_08wxtsa',
        'contact_form',
        refForm.current,
        'LUdyI_89N9aRx8XMZ'
      )
      .then(
        () => {
          alert('Message Sucessfully sent')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message')
        }
      )
  }
  return (
    <>
      <div className="conatiner contact-page">
        <div className="text-zone">
          <h1>Contact</h1>
          <p>React out to me for Web and App development</p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Anmol Gupta
          <br />
          Karnataka Bangalore
          <br />
          MLA Layout
          <br />
          Prabhavati Meadows <br />
          <br />
          <span>anmolgupta0209@gmail.com</span>
        </div>
        <div className="map-wrap">
          <Iframe iframe={iframe} />,
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
