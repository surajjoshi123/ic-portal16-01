import React from 'react'
import './Storypage.css';
import Divider from '../image/SwirlDivider.png';

function Storypage() {
    return (
        <div>
            <section>
            <div className="section " id="section-2" >
            <header class="codrops-header" >
					<h1>Stories</h1>
					<img src={Divider} alt="Caption Divider" style={{ width: '150px', height: '25px', marginLeft: '0px', backgroundColor:'transparent' }} />
				</header>
                <div class="storygrid">
                    <div class="item">
                        <div class="item__details">
                            1
                        </div>
                    </div>
                    <div class="item item--large">
                        <div class="item__details">
                           2
                        </div>
                    </div>
                    <div class="item item--medium">
                        <div class="item__details">
                            3
                        </div>
                    </div>
                    <div class="item item--large">
                        <div class="item__details">
                            4
                        </div>
                    </div>
                    <div class="item item--full">
                        <div class="item__details">
                            5
                        </div>
                    </div>
                    {/* <div class="item item--medium">
                        <div class="item__details">
                            Dragée pudding brownie
                        </div>
                    </div> */}
                    <div class="item item--medium">
                        <div class="item__details">
                            6
                        </div>
                    </div>
                    <div class="item">
                        <div class="item__details">
                            7
                        </div>
                    </div>
                    {/* <div class="item item--large">
                        <div class="item__details">
                            Oat cake
                        </div>
                    </div> */}
                    {/* <div class="item">
                        <div class="item__details">
                            powder toffee
                        </div>
                    </div> */}
                    {/* <div class="item item--medium">
                        <div class="item__details">
                            pudding cheesecake
                        </div>
                    </div> */}
                    {/* <div class="item item--large">
                        <div class="item__details">
                            toffee bear claw
                        </div>
                    </div> */}
                    {/* <div class="item">
                        <div class="item__details">
                            cake cookie croissant
                        </div>
                    </div> */}
                    {/* <div class="item item--medium">
                        <div class="item__details">
                            liquorice sweet roll
                        </div>
                    </div> */}
                    {/* <div class="item item--medium">
                        <div class="item__details">
                            chocolate marzipan
                        </div>
                    </div> */}
                    {/* <div class="item item--large">
                        <div class="item__details">
                            danish dessert lollipop
                        </div>
                    </div> */}
                   
                </div>
                <button class="storybtn" onClick=""><span>View All </span></button>

            </div>
            </section>
        </div>

    )
}

export default Storypage
