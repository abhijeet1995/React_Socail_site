import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import { login } from '../redux/actions/auth'
import { loader } from '../redux/actions/loader'
import { setAlert, removeAlert } from '../redux/actions/alert';
import PopUp from '../common/Popup'


const Login = ({ login, isAuthenticated, load, loader, alert, removeAlert }) => {


	const [formData, setFormData] = useState({
		email: '',
		password: '',

	})

	const { email, password } = formData
	const onChange = e => {

		setFormData({ ...formData, [e.target.name]: e.target.value })
	}
	const enabled =
		email.length > 0 &&
		password.length > 0;

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
									disabled={!enabled}
									style={{ backgroundColor: "#128C7E", color: "white", fontSize: "12px", textAlign: "center" }}>
									{

										load ? (<CircularProgress size={15} style={{ color: '#FFFFFF' }} />) : "Login"
									}
								</button>
							</div>
							<div className="d-flex justify-content-between">
								<div>
									<Link to="/forgotpassword" style={{ fontSize: "12px", color: "#333333" }}>Forgot password</Link>
								</div>
								<div>
									<Link to="/signup" style={{ fontSize: "12px", color: "#333333" }}> Not account ? Please  Register</Link>
								</div>
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



const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	load: state.loader.loading,
	alert: state.alert
})

export default connect(mapStateToProps, { setAlert, loader, removeAlert, login })(Login);