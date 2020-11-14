import React, { useState } from "react";
import "./App.css";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "./components/Header";
import About from "./components/About";
import SocialHolder from "./Icons/Asset1";
import Footer from "./components/Footer";
import PageNav from "./components/PageNav";
import HomePage from "./components/HomePage";
import Video from "./video/mixkit-abstract-virtual-reality-dark-tunnel-31573-medium.mp4";
import Skills from "./components/Skills";

function App() {
	// const [menu, setMenu] = useState(false)
	return (
		<div className="full">
			<video autoPlay muted loop className="bg-video">
				<source src={Video} type="video/mp4"></source>
			</video>
			<SocialHolder height="385px" className="social-holder" color="#360167 " />
			<Header />
			<a href="https://www.google.com" target="_blank">
				<FaTwitter size="2rem" color="white" className="social-icon1" />
			</a>
			<a href="https://www.google.com" target="_blank">
				<FaGithub size="2rem" color="white" className="social-icon2" />
			</a>
			<a href="https://www.google.com" target="_blank">
				<FaLinkedin size="2rem" color="white" className="social-icon3" />
			</a>
			<PageNav />
			<Footer />
			{/* <HomePage /> */}
			{/* <About /> */}
			<Skills />
		</div>
	);
}

export default App;
