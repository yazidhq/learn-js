import React, { Component }  from 'react';

const Navbar = (props) => {
	return (
		<div>
			<h1>{props.navHeader}</h1>
			<ul>
				<li><a href="">Home</a></li>
				<li><a href="">About</a></li>
				<li><a href="">
					{!props.navValue ? "Contact" : props.navValue}
				</a></li>
				<li><a href="">{props.navSosmed}</a></li>
			</ul>
		</div>
	)
}

export default Navbar;