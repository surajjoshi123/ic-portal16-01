import React from 'react'
import Flag from '../image/Ellipse 14.png';
import './Jewell.css';
// import Divider from '../image/SwirlDivider.png';


function Jewell() {
  return (
    <div className=''>
      <div className="jewell">
        <div className="jewellimage">
          <img className='jewellimg' src={Flag} alt="" />
        </div>
        <div className="jewellheader">
          <h1>Jewellery of the Nizams</h1>
          {/* <img src={Divider} alt="Caption Divider" style={{ width: '150px', height: '25px', marginLeft: '0px', backgroundColor: 'transparent' }} /> */}
          {/* <h1 style={{color:'#000', fontSize:'32px'}}>Varanasi</h1> */}
          {/* <p className='jewelltext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
          <button class="jewellbtn" ><span>Explore</span></button>

        </div>

      </div>
      <hr/>

    </div>
  )
}

export default Jewell
