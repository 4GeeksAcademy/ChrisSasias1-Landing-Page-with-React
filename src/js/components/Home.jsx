import React from "react";
import { Card } from "./Card.jsx"
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";

//create your first component
const Home = () => {


	let motos = [
		{
			name: "Kawasaki Ninja ZX-10R", info: "998 cc superbike with MotoGP tech. Explosive acceleration and tops 300 km/h.", image: "https://cdn.motor1.com/images/mgl/wlW6Ko/s3/is-kawasaki-killing-the-ninja-zx-10.webp"
		},
		{
			name: "Yamaha YZF-R1", info: "998 cc crossplane engine, unique sound, smooth yet brutal power delivery.", image: "https://yamahamotorsports.com/media/images_products/2026-26-yzf-r1/1920px/11-2026-YZFR1T1L-DPBMC-US-12-YY-03855.JPG.webp"
		},

		{
			name: "Suzuki GSX-R1000R", info: "Classic inline-four, over 200 hp, perfect mix of power,  control and experiencies.", image: "https://www.globalsuzuki.com/motorcycle/smgs/products/2023gsx-r1000r/img/main_ph.jpg"
		},
		{
			name: "Honda CBR1000RR-R", info: "MotoGP-inspired 999 cc screamer with top-tier electronics, up to 315 km/h.", image: "https://powersports.honda.com/motorcycle/supersport/-/media/products/family/cbr1000rr-r-fireblade-sp/hero-banner/mobile/2025/2025-cbr1000rr-r-fireblade-sp-hero-banner.jpg"
		}

	];


	return (
		<div className="container ">

			<Navbar />
			<Jumbotron />
			<div className=" row d-flex justify-content-center">
				{motos.map((item, index) => (
					<div className="col-lg-3 col-md-6 col-12">
						<Card key={index} name={item.name} info={item.info} image={item.image} />
					</div>
				))}

			</div>






		</div>
	);
};

export default Home;