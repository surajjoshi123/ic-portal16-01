import React from 'react';
import Flag from '../image/Ellipse 13.png';
import Divider from '../image/SwirlDivider.png';
import './TodayInHistory.css';

function TodayInHistory() {
  return (
    <div>
        <hr/>
      <div className="todayhis">
        
        <div className="todayhisimage">
          <img className='todayhisimg' src={Flag} alt="Did you know" />
        </div>
        <div className="todayhisheader">
          <h1>Today in History</h1>
          <img src={Divider} alt="Caption Divider" style={{ width: '150px', height: '25px', marginLeft: '0px', backgroundColor: 'transparent' }} />
          <h1 style={{color:'#000', fontSize:'32px'}}>06 September 1889<br/>Sarat Chandra Bose (1889 to 1950)             </h1>
          <p className='todaytext'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <button class=" todayhisbtn" ><span>Read More </span></button>

        </div>

      </div><hr/>
    </div>
  )
}

export default TodayInHistory
