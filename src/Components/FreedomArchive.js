import React from 'react';
import './FreedomArchive.css';
import Divider from '../image/SwirlDivider.png';
import FreedomArc from '../image/freedomarchive.jpg';
import Catagories from './Catagories';

function FreedomArchive() {
  return (

    // <div className='bg_image'>
    <div className='' >

      <img src={FreedomArc} className='bg_image' alt=''/>
      <header class="freeheader">
        <h1 >Freedom Archive</h1>
        <img src={Divider} alt="Caption Divider" style={{ width: '150px', height: '25px', marginLeft: '80px', backgroundColor:'transparent' }} />

      </header>
      <div className='freedomarcpara' >
        <p>After more than 7 decades of freedom, these stories of courage, <br />
          selflessness and determination continue to inspire and instill pride in us.</p>
      </div>
      <button class=" freedomarcbtn" onClick={Catagories} ><span>Explore </span></button>

    </div>
   
  )
}

export default FreedomArchive
