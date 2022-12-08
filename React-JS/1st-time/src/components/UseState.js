import React  from 'react';

const UseState = ({navValue}) => {
	return (
		<div>
			<ul>
				<li><a href="">Home</a></li>
				<li><a href="">
                    {!navValue ? "About" : navValue}
                </a></li>
			</ul>
		</div>
	)
}

export default UseState;