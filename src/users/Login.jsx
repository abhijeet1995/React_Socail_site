import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types'
import { login } from '../redux/actions/auth'
import { loader } from '../redux/actions/loader'
import { setAlert, removeAlert } from '../redux/actions/alert';
import PopUp from '../common/Popup'


const Login = ({ login, isAuthenticated, load, loader, alert, removeAlert }) => {
	const [formData, setFormData] = useState({
		email: 'shikharabhijeet1995@gmail.com',
		password: 'munger@95',

	})

	const { email, password } = formData
	const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
	React.useEffect(() => {
		loader(false)
	}, [])

	const onSubmit = async e => {
		e.preventDefault();
		login(email, password)

	}

	//Redirect
	if (isAuthenticated) {
		return <Redirect to="/dashboard" />
	}
	return (
		<div>
			<PopUp open={alert.open} type={alert.openType} />
			<div className="container">
				<div className="row">
					<div className="col-md-4">

					</div>
					<div className="col-md-4">
						<form>
							<div class="form-group">
								<label for="exampleInputEmail1">Email</label>
								<input type="name"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									onChange={e => onChange(e)}
									value={email}
									name="email"
								/>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">Password</label>
								<input type="password"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									onChange={e => onChange(e)}
									value={password}
									name="password"
								/>
							</div>
							<div class="form-group">
								<button className=" btn btn btn-lg btn-block"
									onClick={onSubmit}
									style={{ backgroundColor: "#FF5F6D", color: "white", fontSize: "12px", textAlign: "center" }}>
									{

										load ? (<CircularProgress size={24} style={{ color: '#FFFFFF' }} />) : "Login"
									}
								</button>
							</div>
							<div>
								<Link to="/forgotpassword" style={{ fontSize: "14px" ,color:"#333333"}}>Forgot password</Link>
							</div>
						</form>
					</div>
					<div className="col-md-4">

					</div>
				</div>
			</div>
		</div>
	)
}

login.PropTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	load: state.loader.loading,
	alert: state.alert
})

export default connect(mapStateToProps, { setAlert, loader, removeAlert, login })(Login);