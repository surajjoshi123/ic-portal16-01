import React from 'react';
import image from './img/cata1.png';
import image1 from './img/cata2.png';
import image2 from './img/cata3.png';
import image3 from './img/cata4.png';
import image4 from './img/cata5.png';

import icon1 from './img/cat1.png';
import icon2 from './img/cat2.png';
import icon3 from './img/cat3.png';
import icon4 from './img/cat4.png';
import icon5 from './img/cat5.png';

import { Helmet } from "react-helmet";
import Slider from "react-slick";
import Divider from '../image/SwirlDivider.png';

// import CatagoriesList from './CatagoriesList.js';
/* import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; */

function Catagories() {
	const settings = {
		className: "center",
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 5,
		focusOnSelect: true,
		// slidesToScroll:4,
		swipeToSlide: true,
		// dots: true,


		afterChange: function (index) {
			console.log(
				`Slider Changed to: ${index + 1}, background: #222; color: #bada55`
			);
		}
	};


	return (

		<div id="Catagory" className=''>

			<Helmet>
				<script src="./assets/js/hovers.js"></script>
				<script src="./assets/js/snap.svg-min.js"></script>
				<link rel="stylesheet" type="text/css" href="./assets/css/slick-theme.css" />
				<link rel="stylesheet" type="text/css" href="./assets/css/slick.css" />
			</Helmet>
			<div class="container y-mandatory" >


				<header class="codrops-header"   >
					<h1 >Categories</h1>
					<img src={Divider} alt="Caption Divider" style={{ width: '150px', height: '25px', marginLeft: '0px', backgroundColor: 'transparent' }} />
				</header>

				<section class="grid clearfix" >

					<Slider {...settings} >

						<a href="/#" data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
							<figure>
								<img src={image} alt='one' />
								<svg viewBox="0 0 180 320" preserveAspectRatio="none"><path d="M 180,160 0,218 0,0 180,0 z" /></svg>
								<figcaption>
									<h2>Rarebook</h2>
									{/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p> */}
									<img src={icon1} style={{width:'72px', height:'72px', marginLeft:'70px', marginTop:'70px', backgroundColor:'transparent'}} alt=""/>
									<button>View</button>
								</figcaption>
							</figure>
						</a>
						<a href="/#" data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
							<figure>
								<img src={image1} alt='one' />
								<svg viewBox="0 0 180 320" preserveAspectRatio="none"><path d="M 180,160 0,218 0,0 180,0 z" /></svg>
								<figcaption>
									<h2>Photo Eassy</h2>
									<img src={icon4} style={{width:'72px', height:'72px', marginLeft:'70px', marginTop:'70px', backgroundColor:'transparent'}} alt=""/>
									<button>View</button>
								</figcaption>
							</figure>
						</a>
						<a href="/#" data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
							<figure>
								<img src={image2} alt='three' />
								<svg viewBox="0 0 180 320" preserveAspectRatio="none"><path d="M 180,160 0,218 0,0 180,0 z" /></svg>
								<figcaption>
									<h2>E-Book</h2>
									<img src={icon3} style={{width:'72px', height:'72px', marginLeft:'70px', marginTop:'70px', backgroundColor:'transparent'}} alt=""/>
									<button>View</button>
								</figcaption>
							</figure>
						</a>
						<a href="/#" data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
							<figure>
								<img src={image3} alt='five' />
								<svg viewBox="0 0 180 320" preserveAspectRatio="none"><path d="M 180,160 0,218 0,0 180,0 z" /></svg>
								<figcaption>
									<h2>Food and Culture</h2>
									<img src={icon2} style={{width:'72px', height:'72px', marginLeft:'70px', marginTop:'70px',backgroundColor:'transparent'}} alt=""/>
									<button>View</button>
								</figcaption>
							</figure>
						</a>
						<a href="/#" data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
							<figure>
								<img src={image4} alt='one' />
								<svg viewBox="0 0 180 320" preserveAspectRatio="none"><path d="M 180,160 0,218 0,0 180,0 z" /></svg>
								<figcaption>
									<h2>Snippets</h2>
									<img src={icon5} style={{width:'72px', height:'72px', marginLeft:'70px', marginTop:'70px', backgroundColor:'transparent'}} alt=""/>
									<button>View</button>
								</figcaption>
							</figure>
						</a>
						<a href="/#" data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
							<figure>
								<img src={image2} alt='five' />
								<svg viewBox="0 0 180 320" preserveAspectRatio="none"><path d="M 180,160 0,218 0,0 180,0 z" /></svg>
								<figcaption>
									<h2>Story</h2>
									<img src={icon1} style={{width:'72px', height:'72px', marginLeft:'70px', marginTop:'70px',backgroundColor:'transparent'}} alt=""/>
									<button>View</button>
								</figcaption>
							</figure>
						</a>

					</Slider>
					<button class="catagorybtn" ><span>View All </span></button>

				</section>

			</div>

		</div>

	)

}


export default Catagories
