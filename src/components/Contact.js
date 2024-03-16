import React from 'react'
import "./ContactStyles.css"
import amal from "../assets/amal.jpg"
import athul from "../assets/athul.jpg"
import adithya from "../assets/adithya.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
    


  return (
    <>
    <body className='contact-body'>
        
   
    <div class="contact-container">
    <div class="row">
        <div class="img-container">
            <div class="box1"> <img src={amal} style={{ width:'300px', height: '300px' }} className='img-thumbn' alt=""/>
                <h3 class="title">Amal</h3>
                <ul class="icon">
                <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
                </ul>
            </div>
        </div>
        <div class="img-container">
            <div class="box1"> <img src={athul}  alt="" style={{ width:'300px', height: '300px' }} class="img-thumbn"/>
                <h3 class="title">Athul</h3>
                <ul class="icon">
                <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
                </ul>
            </div>
        </div>
        <div class="img-container">
            <div class="box1"> <img src={adithya} style={{ width:'300px', height: '300px' }} alt="" class="img-thumbn"/>
                <h3 class="title">Adithya</h3>
                <ul class="icon">
                <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
                </ul>
            </div>
        </div>
        <div class="img-container">
            <div class="box1"> <img src="https://i.imgur.com/J6l19aF.jpg" alt=""/>
                <h3 class="title">Nehal</h3>
                <ul class="icon">
                <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
    </body>
    </>
  )
}

export default Contact