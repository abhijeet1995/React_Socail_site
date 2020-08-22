import React , {Fragment }from "react";
import { Link} from "react-router-dom";
import {connect} from 'react-redux' 
import {logout} from '../redux/actions/auth'


const Menu = ({ auth: { isAuthenticated,loading,user},logout}) => {
	const authLinks = (
		<ul className="navbar-nav ml-auto">
			
			<li className="nav-item">
				<Link className="nav-link">
					<img src={ user && user.avatar} alt="" width="30" height="30" className="rounded-circle" />
					Hi {user && user.name}
				</Link>
			</li>
			<li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					Profile Setting
       			</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
					<Link class="dropdown-item" to="/profileSetting">Upload Photo</Link>
					<Link class="dropdown-item" to="/changePassword">Change Password</Link>
					
				</div>
			</li>
			<li>
				<Link className="nav-link active" to='/Profile'>Profile</Link>
			</li>
			<li>
				<Link className="nav-link active" to='/Posts'>Post </Link>
			</li>
			
			<li className="nav-item">
				<Link className="nav-link"  onClick={logout} to="/">
					Logout
				</Link>
			</li>
		</ul>
		
	);
	const guestLinks = (
		<ul className="navbar-nav ml-auto">
			<li className="nav-item">
				<Link className="nav-link" to='/signup'>Register</Link>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to='/'>Login</Link>
			</li>
		</ul>
	);
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-dark fixed-top  ml-auto" style={{ backgroundColor:"#128C7E"}}>
				<Link class="navbar-brand" to="/dashboard">Social Platform</Link>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					{!loading && (
						<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
					)}
				</div>
				
			</nav>
		</div>
	);
}
const mapStateToProps = state =>({
	auth:state.auth //entire auth state,
	
})

export default connect(mapStateToProps, { logout})(Menu);
