import React, { useState } from "react";
import MenuHolder from "../Icons/Asset4";

import { HiMenu } from "react-icons/hi";

const Header = () => {
	// const [menu, setMenu] = useState(false);
	// if (menu) {
	// 	<MenuHolder width="400px" />;
	// }

	return (
		<header>
			<MenuHolder width="200px" className="menu-holder" color="#360167" />
			<nav>
				<div className="menu-position">
					<HiMenu size="2.5rem" color="white" />
				</div>
			</nav>
		</header>
	);
};

export default Header;
