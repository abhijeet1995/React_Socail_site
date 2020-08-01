import React from 'react'
import Menu from '../core/Menu'

const Layout = (props) => {
	return (
		<React.Fragment>
			<Menu />
			<div className="bodydiv">
				{props.children}
			</div>
		</React.Fragment>
	);
}

export default Layout
