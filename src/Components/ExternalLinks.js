// import { render } from '@testing-library/react';
import React from 'react'
import Slider from "react-slick";
import './ExternalLinks.css';
// import './Externalslick.css';
// import './ExternalSlickTheme.css';

import Divider from '../image/SwirlDivider.png';

import { Helmet } from 'react-helmet';
import figure1 from '../image/e1.png';
import figure2 from '../image/e2.jpg';
import figure3 from '../image/e3.jpg';
import figure4 from '../image/e4.png';
import figure5 from '../image/e3.jpg';
// import figure6 from '../image/fig6.webp';

// import "slick-carousel/slick/slick.css";

// import "slick-carousel/slick/slick-theme.css";

function ExternalLinks() {


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        // autoplay: true,
        // autoplayspeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <Helmet>
           {/* <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> */}
                
                <link rel="stylesheet" type="text/css" href="./assets/css/slick-theme.css" />
				<link rel="stylesheet" type="text/css" href="./assets/css/slick.css" />
                </Helmet>
                <header class="external-header"   >
					<h1 >External Links</h1>
					<img src={Divider} alt="Caption Divider" style={{ width: '150px', height: '25px', marginLeft: '0px', backgroundColor: 'transparent' }} />
				</header>

            <div className="container externalcontainer">
                <section className="grid clearfix">
                    <Slider {...settings} style={{ width: 'auto', marginLeft: '0px' }}>
                        <div>
                            <img src={figure1} alt="one" className='externalimg' />

                        </div>
                        <div>
                            <img src={figure2} alt="one" className='externalimg' />

                        </div>
                        <div>
                            <img src={figure3} alt="one" className='externalimg' />

                        </div>
                        <div>
                            <img src={figure4} alt="one" className='externalimg' />

                        </div>
                        <div>
                            <img src={figure5} alt="one" className='externalimg' />

                        </div>
                        <div>
                            <img src={figure3} alt="one" className='externalimg' />

                        </div>
                        <div>
                            <img src={figure1} alt="one" className='externalimg' />

                        </div>
                        <div>
                            <img src={figure2} alt="one" className='externalimg' />

                        </div>
                    </Slider>
                </section>
            </div>
        </div>
    );
}


export default ExternalLinks
