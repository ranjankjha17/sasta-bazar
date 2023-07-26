import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
const Footer = () => {
  return (
    <footer class="bg-dark text-light py-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <h5>About Us</h5>
            <p>At Sasta Bazar, we are passionate about delivering the best online shopping experience to our customers. Our mission is to provide you with a wide range of high-quality products at competitive prices, all from the comfort of your own home.</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <h5>Contact</h5>
            <ul class="list-unstyled">
              <li>Email: contact@example.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Main Street, City, Country</li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <h5>Follow Us</h5>
            <ul class="list-inline">
              <li class="list-inline-item"><a href=" #"><FontAwesomeIcon icon={faFacebookF} style={{color:"#fff"}}/></a></li>
              <li class="list-inline-item"><a href=" #"><FontAwesomeIcon icon={faTwitter} style={{color:"#fff"}}/></a></li>
              <li class="list-inline-item"><a href=" #"><FontAwesomeIcon icon={faInstagram} style={{color:"#fff"}} /></a></li>
              <li class="list-inline-item"><a href=" #"><FontAwesomeIcon icon={faLinkedin} style={{color:"#fff"}}/></a></li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <p style={{ textAlign: "center" }}>Developed By Ranjan</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer