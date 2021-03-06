import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
//redux
import { connect } from 'react-redux';
import { setAlert, removeAlert } from '../redux/actions/alert';
import { register } from '../redux/actions/auth';
import { loader } from '../redux/actions/loader'
import PopUp from '../common/Popup'
const Register = ({ setAlert, register, alert, history, removeAlert, load}) => {

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});
	const { name, email, password, password2 } = formData;

	const handleChange = name => event => {
		setFormData({ ...formData, [name]: event.target.value });
	};


	const clickSubmit = event => {
		event.preventDefault();
		if (password !== password2) {
			setAlert("Password donot match")
		}
		else {
			register({ name, email, password })
		}
	};

	// if(isAuthenticated){
	// 	return <Redirect to="/signin" />
	// }

	const handleClose = () => {
		removeAlert()
	}


	return (
		<div>
			<PopUp open={alert.open} history={history} type={alert.openType} link={"/"} />
			<div className="container ">
				<div className="row">
					<div className="col-md-4">

					</div>
					<div className="col-md-4">
						<form>
							<div class="form-group">
								<label for="exampleInputEmail1">Name</label>
								<input type="email"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									onChange={handleChange("name")}
									value={name}
								/>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">Email</label>
								<input type="name"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									onChange={handleChange("email")}
									value={email}
								/>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">Password</label>
								<input type="password"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									onChange={handleChange("password")}
									value={password}
								/>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">Confirm Password</label>
								<input type="password"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									onChange={handleChange("password2")}
									value={password2}
								/>
							</div>

							<div class="form-group">
								<button className=" btn btn btn-lg btn-block"
									onClick={clickSubmit}
									style={{ backgroundColor: "#128C7E", color: "white", fontSize: "12px", textAlign: "center", borderRadius: "50px", padding: "10px", marginTop: "22px" }}>
									{
										load ? (<CircularProgress size={14} style={{ color: "white" }} />) : "submit"
									}
								</button>
							</div>
							<div>
								<Link to="/" style={{ fontSize: "12px", color: "#333333" }}>Already Account ? Please Signup</Link>
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
	alert: state.alert,
	load: state.loader.loading,
});

export default connect(mapStateToProps, { setAlert, removeAlert, register, loader })(Register);
