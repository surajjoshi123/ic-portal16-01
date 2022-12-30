import React from 'react'
import Flag from '../image/Ellipse 12.png';
import './DidYouKnow.css';
import Divider from '../image/SwirlDivider.png';


function DidYouKnow() {
  return (
    <div>
      <div className="didyou">
        <div className="didyouimage">
          <img className='didyouimg' src={Flag} alt="Did you know" />
        </div>
        <div className="didyouknowheader">
          <h1>Did You Know</h1>
          <img src={Divider} alt="Caption Divider" style={{ width: '150px', height: '25px', marginLeft: '0px', backgroundColor: 'transparent' }} />
          <h1 style={{color:'#000', fontSize:'32px'}}>Varanasi</h1>
          <p className='didtext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <button class=" didyouknowbtn" ><span>Read More </span></button>

        </div>

      </div>
      
    </div>
  )
}

export default DidYouKnow
