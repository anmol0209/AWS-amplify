import './index.scss'

const Location = () => {
  return (
    <div className="my-location">
      <iframe
        title="My Daily Marathon Tracker"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6770126909523!2d77.59362651433324!3d12.864125820709239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ac537cfe1ef%3A0x4699f24e4460abe4!2sPrabhavathi%20Meadows!5e0!3m2!1sen!2sin!4v1649075972759!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Location
