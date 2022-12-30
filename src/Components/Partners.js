import React from 'react';
import './Partners.css';
import Divider from '../image/SwirlDivider.png';
import MOC from '../image/MoC.png';
import IIT from '../image/IIT.png';
import IGNOU from '../image/ignou.png';

function Partners() {
    return (
        <div className='partners-container'>
            
            <header class="partners-header" >
					<h1>Partners</h1>
					<img src={Divider} alt="Caption Divider" style={{ width: '150px', height: '25px', marginLeft:'0px', backgroundColor:'transparent' }} />
				</header>
            <div class="partcard">
                <img src={IIT} className='partimg1' alt="IIT" />
                <h4 className='partheading'>IIT Bombay</h4>
                <h6 className='partheading'>Indian Institute of Technology Bombay</h6>
                <button class=" partbtn" ><span>Explore </span></button>

            </div>
            <div class="partcard1">
                <img src={MOC} className='partimg' alt="MoC" />
                <h4 className='partheading'>Ministry of Culture</h4>
                <h6 className='partheading'>Government of India</h6>
                <button class=" partbtn" ><span>Explore </span></button>

            </div>
            <div class="partcard2">
                <img src={IGNOU} className='partimg2' alt="IGNOU" />
                <h4 className='partheading'>IGNOU</h4>
                <h6 className='partheading'>Indira Gandhi National Open University</h6>
                <button class=" partbtn" ><span>Explore </span></button>

            </div>
            <img src={Divider} alt="Caption Divider" style={{ width: '150px', height: '25px', marginTop: '30px', marginLeft: '769px', backgroundColor: 'transparent' }} />

        </div>
    )
}

export default Partners
