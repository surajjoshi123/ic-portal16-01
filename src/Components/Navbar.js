import React from 'react'
import Flag from '../image/Flag_of_India.png';
import './Navbar.css';



function Navbar() {
    
    return (
        <div className='NavbarBgColor'>
            <div className='top-bar'>
                <div className="container govindi ">
                    <div class="row ">
                        <div class="col-12">
                        <a href="#/" class=""><span class="mr-2 "></span> <span class="d-none d-md-inline-block"><img src={Flag} style={{width:'25px', height:'20px', marginTop:'0px'}}  alt="Indian Flag"/> Government of India</span></a>
                            <span class="mx-md-2 d-inline-block"></span>
                            <a href="#/" class=""><span class="mr-2  icon-envelope-open-o"></span> <span class="d-none d-md-inline-block">example@indianculture.com</span></a>
                            <span class="mx-md-2 d-inline-block"></span>
                            {/* <a href="#/" class=""><span class="mr-2  icon-phone"></span> <span class="d-none d-md-inline-block">1+ (010) 0101 0101</span></a> */}


                            <div class="float-right" >
                                {/* <button className='darknlight'>Light / Dark</button> */}
                            <span class="mx-md-2 d-inline-block"></span>
                            <a href="#Catagory" class="" style={{marginRight:'20px'}}><span class="mr-2" ></span> <span class="d-none d-md-inline-block" >Skip to main content</span></a>
                                <span class="mx-md-2 d-inline-block"></span>
                           
                              
                            <a href="#/" class=""><span class="mr-2  icon-facebook"></span> <span class="d-none d-md-inline-block">Facebook</span></a>
                                <span class="mx-md-2 d-inline-block"></span>
                                <a href="#/" class=""><span class="mr-2  icon-instagram"></span> <span class="d-none d-md-inline-block">Instagram</span></a>
                                <span class="mx-md-2 d-inline-block"></span>                     
                                <a href="#/" class=""><span class="mr-2  icon-twitter"></span> <span class="d-none d-md-inline-block">Twitter</span></a>

                            </div>

                        </div>
                        

                    </div>

                </div>
            </div>
        </div>
        
        
    )
}

export default Navbar
