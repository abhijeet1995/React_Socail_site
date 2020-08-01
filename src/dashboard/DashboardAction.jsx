import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import { deleteAccount } from '../redux/actions/profile'


const isActive = (history, path) => {
	if (history.location.pathname === path) {
		return { backgroundColor: "#FF5F6D",color:"white" };
	} else {
		return { color: "#333333" };
	}
};
const DashboardAction = ({deleteAccount,history}) => {
	return (
		<div className='sidenav'>
			<Link className="nav-link" style={isActive(history, "/dashboard")}
			to="/dashboard"
			> 
				<i className='fas fa-home ' /> Home
      		</Link>
			<Link className="nav-link" style={isActive(history, "/edit-profile")}  to='/edit-profile'>
				<i className='fas fa-user-circle ' /> Edit Profile
      		</Link>
			<Link className="nav-link" style={isActive(history, "/add-experience")} to='/add-experience'>
				<i className='fab fa-black-tie ' /> Add Experience
      		</Link>
			<Link className="nav-link" style={isActive(history, "/add-education")} to='/add-education'>
				<i className='fas fa-graduation-cap ' /> Add Education
      		</Link>
			<Link className="nav-link" style={isActive(history, "/")} onClick={() => deleteAccount()} >
				<i className='fas fa-trash ' /> Delete Profile
      		</Link>
		</div>
	)
}

const mapStateToProps = state => ({
	profile: state.profile
})

export default connect(mapStateToProps, {deleteAccount }) (withRouter(DashboardAction))