import React from "react";
import Tina from "../Happy-Girl-Young-PNG.png";

const About = () => {
	return (
		<div>
			<section className="about-header">
				<span className="about-author">Tina Mechleb</span>
				<p className="about-quote">Its the little things that matter most</p>
			</section>
			<section className="about-main">
				<h1 className="about-title">About.</h1>
				<p className="about-passage">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
					vitae aliquet orci. Class aptent taciti sociosqu ad litora torquent
					per conubia nostra, per inceptos himenaeos. Mauris id lobortis velit,
					porttitor finibus justo. Vestibulum ante ipsum primis in faucibus orci
					luctu
				</p>
				<img src={Tina} className="tina"></img>
			</section>
		</div>
	);
};

export default About;
