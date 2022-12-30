import React from 'react';
import image from './img/1.png';
import { Helmet } from "react-helmet";

import Divider from '../image/SwirlDivider.png';


function Catagories() {
	return (
		<div>

			<Helmet>
				<script src="./assets/js/hovers.js"></script>
				<script src="./assets/js/snap.svg-min.js"></script>
				
			</Helmet>
			<div class="container">


				<header class="codrops-header">
					<h1>Catagories</h1>
					<img src={Divider} alt="Caption Divider" style={{ width: '150px', height: '25px', marginLeft: '0px' }} />
				</header>

				<section id="grid" class="grid clearfix">
						
						<a href="/#" data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
							<figure>
								<img src={image} alt='one' />
								<svg viewBox="0 0 180 320" preserveAspectRatio="none"><path d="M 180,160 0,218 0,0 180,0 z" /></svg>
								<figcaption>
									<h2>Rarebook</h2>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
									<button>View</button>
								</figcaption>
							</figure>
						</a>
						<a href="/#" data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
							<figure>
								<img src={image} alt='one' />
								<svg viewBox="0 0 180 320" preserveAspectRatio="none"><path d="M 180,160 0,218 0,0 180,0 z" /></svg>
								<figcaption>
									<h2>Photo Eassy</h2>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
									<button>View</button>
								</figcaption>
							</figure>
						</a>
						<a href="/#" data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
							<figure>
								<img src={image} alt='three' />
								<svg viewBox="0 0 180 320" preserveAspectRatio="none"><path d="M 180,160 0,218 0,0 180,0 z" /></svg>
								<figcaption>
									<h2>E-Book</h2>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
									<button>View</button>
								</figcaption>
							</figure>
						</a>
						<a href="/#" data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
							<figure>
								<img src={image} alt='five' />
								<svg viewBox="0 0 180 320" preserveAspectRatio="none"><path d="M 180,160 0,218 0,0 180,0 z" /></svg>
								<figcaption>
									<h2>Food and Culture</h2>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
									<button>View</button>
								</figcaption>
							</figure>
						</a>
						<a href="/#" data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
							<figure>
								<img src={image} alt='one' />
								<svg viewBox="0 0 180 320" preserveAspectRatio="none"><path d="M 180,160 0,218 0,0 180,0 z" /></svg>
								<figcaption>
									<h2>Snippets</h2>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
									<button>View</button>
								</figcaption>
							</figure>
						</a>
						<a href="/#" data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
							<figure>
								<img src={image} alt='five' />
								<svg viewBox="0 0 180 320" preserveAspectRatio="none"><path d="M 180,160 0,218 0,0 180,0 z" /></svg>
								<figcaption>
									<h2>Story</h2>
									<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
									<button>View</button>
								</figcaption>
							</figure>
						</a>


				</section>
			</div>
		</div>
	)
}

export default Catagories
