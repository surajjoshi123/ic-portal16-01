import React from 'react';
import './VirtualWalk.css';
// import Divider from '../image/SwirlDivider.png';
import Virtualimage from '../image/virtual.jpg';

function VirtualWalk() {
  return (
    <div>
      <div className='virtual-container'>
    
    <img src={Virtualimage} className='virbg_image' alt='Virtual'/>
    <header class="virtualheader">
      <h1 className='virhead'>Virtual Walkthrough</h1>
      {/* <img src={Divider} alt="Caption Divider" style={{ width: '150px', height: '25px', marginLeft: '80px', backgroundColor:'transparent' }} /> */}

    </header>
   
    <button class=" virtualbtn" ><span>Explore </span></button>

  </div>
    </div>
  )
}

export default VirtualWalk
