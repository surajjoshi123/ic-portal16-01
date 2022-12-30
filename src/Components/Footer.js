import React from 'react';
import './Footer.css';

/* import Android from '../images/Andy.png';
import Apple from '../images/IOS.png'; */
import QRCode from '../image/QRCode.PNG';
import IncredibleIndia from '../image/footer/150 years.png';
import DigiIndia from '../image/footer/Digital-India.png';
import Logo1 from '../image/footer/Incredible-India.png';
import Gandhi from '../image/footer/Ministry of culture.png';
import Swachhbharat from '../image/footer/Mygov.png';
import Mygov from '../image/footer/Swacch-Bharat.png';
import { Helmet } from 'react-helmet';

<Helmet>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>


</Helmet>

function Footer() {
    return (

        <div>
            <footer class="footer-section">
                <div class="container">

                    <div class="footer-content pt-5 pb-5">
                        <div class="row">
                            {/* <p>Indian Culture text area here</p> */}
                            <div class="col-xl-4 col-lg-4 mb-50">
                                <div class="footer-widget">
                                    <div class="footer-logo">
                                        <div class="footer-widget-heading">
                                            <h3>INDIAN CULTURE</h3>
                                        </div>
                                    </div>
                                    <div class="footer-text">
                                        <p>The Indian Culture Portal is a part of the National Virtual Library of India project, funded by the Ministry of Culture, Government of India. The portal has been created and developed by the Indian Institute of Technology, Bombay. Data has been provided by organisations of the Ministry of Culture and curated by Indira Gandhi National Open University.

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-30 quicklinks">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>QUICK LINKS</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#/">Indian Culture Portal</a></li>
                                        <li><a href="#/">Copyright</a></li>
                                        <li><a href="#/">NVLI</a></li>
                                        <li><a href="#/">Copyright Policy</a></li>
                                        <li><a href="#/">Disclaimer</a></li>
                                        <li><a href="#/">Terms & Conditions</a></li>
                                        <li><a href="#/">Privacy Policy</a></li>
                                        <li><a href="#/">Accessibility Statement</a></li>
                                        <li><a href="#/">Site Map</a></li>
                                        <li><a href="#/">Hyperlinking Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                           
                            <div class="col-xl-4 col-lg-4 col-md-6 mb-50 followus">
                                <div class="footer-widget">
                                    <div class="footer-widget-heading">
                                        <h3>FOLLOW US</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        <p>Kindly Follow us on <i>Instagram, Facebook, Twitter etc</i>.</p>
                                        
                                    </div>
                                    <div class="footer-widget-heading">
                                        <h3>SCAN HERE</h3>
                                    </div>
                                    <div class="footer-text mb-25">
                                        {/* <p>Kindly <i>contact</i> us, details are below.</p> */}
                                        <img src={QRCode} style={{ width: '100px', height: '100px'}}/>
                                    </div>

                                    
                                </div>
                               
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div class="copyright-area">
                    <div class="container">
                        <div class="row">
                            {/* <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2022, All Right Reserved <a href="#">Indian Culture</a></p>
                        </div>
                    </div> */}
                            {/* <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right"> */}
                            <div class="footer-menu">
                                 <ul>
                                    <li><a href="#/"><img src={IncredibleIndia} alt="IncredibleIndia" style={{ width: '200px', height: '100px', backgroundColor:'transparent' }} /></a></li>
                                   
                                    <li><a href="#/"><img src={DigiIndia} alt="DigiIndia" style={{marginLeft:'-63px', width: '120px', height: '70px', backgroundColor:'transparent' }}/></a></li>
                                    <li><a href="#/"><img src={Logo1} alt="Logo1" style={{ width: '200px', height: '50px', backgroundColor:'transparent' }} /></a></li>
                                    <li><a href="#/"><img src={Gandhi} alt="Gandhi" style={{ width: '200px', height: '50px', backgroundColor:'transparent' }} /></a></li>
                                    <li><a href="#/"><img src={Swachhbharat} alt="Swachhbharat" style={{ width: '120px', height: '50px', backgroundColor:'transparent' }} /></a></li>
                                    <li><a href="#/"><img src={Mygov} alt="Mygov" style={{ width: '120px', height: '50px', backgroundColor:'transparent' }} /></a></li>


                                </ul> 
                                {/* </div> */}
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ width: '100%', flex: 1, height: '20px', background: 'linear-gradient(to right, #912569 0%, #d34156 100%)', margin: '-11px', marginTop: '-17px', marginLeft: '0px' }} />

            </footer>

        </div>
    )
}

export default Footer
