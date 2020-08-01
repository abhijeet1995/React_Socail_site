import React from 'react'
import DashboardAction from '../dashboard/DashboardAction';


const LayoutSide = (props) => {
	return (
		<React.Fragment>
			<DashboardAction />
			<div>
				{props.children}
			</div>
		</React.Fragment>
	);
}

export default LayoutSide
