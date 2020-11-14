import React from "react";

import laptop from "../—Pngtree—shutdown laptop free png transparent_5444726 (1).png";

const HomePage = () => {
	const sectionStyle = {
		// width: "100%",
		// height: "400px",
		backgroundImage:
			'url("./—Pngtree—shutdown laptop free png transparent_5444726 (1).png")',
	};

	return (
		<>
			<main>
				<div className="author">
					<h1 dir="rtl">
						Tina <br />
						<div className="underline"></div>
						Meshleb
					</h1>
				</div>
				<section className="banner">
					<article className="banner-info">
						<h2>
							Web Developer <br />
							based in <br />
							Beirut, LB
						</h2>
						<button type="button" className="banner-btn">
							Learn More
						</button>
					</article>
					{/* <div className="img-holder"> */}
					{/* <div className="trial"></div> */}
					<img src={laptop} className="laptop" />
					{/* </div> */}
				</section>
			</main>
		</>
	);
};

export default HomePage;
