import React, { useState } from 'react'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import { loader } from '../redux/actions/loader'
import { setAlert, removeAlert } from '../redux/actions/alert';
import {changePassword} from '../redux/actions/userProfile'
import Snack from '../common/Snack';



const ChangePassword = ({ load, changePassword, alert, removeAlert }) => {
	const [formData, setFormData] = useState({
		password: '',
		npassword: '',
		confirmPassword:""

	})

	const { password, npassword,confirmPassword } = formData
	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	} 
	

	// const onSubmit = async e => {
	// 	e.preventDefault();
	// 	if (npassword !== confirmPassword) {
	// 		setAlert("Password donot match")
			
	// 	}
	// 	else{
	// 		changePassword( password, npassword )
	// 	}

	// }

	const clickSubmit = event => {
		event.preventDefault();
		changePassword(password, npassword)
	};
	const handleClose = () => {
		removeAlert()
	}
	
	
	return (
		<div>
			<Snack type={alert.type} key="EMAIL" message={alert.message} open={alert.open} close={handleClose} />
			<div className="container p-5">
				<div className="row">
					<div className="col-md-4">

					</div>
					<div className="col-md-4">
						<form>
							<div class="form-group">
								<label for="exampleInputEmail1">Current Password</label>
								<input type="name"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									onChange={e => onChange(e)}
									value={password}
									name="password"
									
								/>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">New Password</label>
								<input type="password"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									onChange={e => onChange(e)}
									value={npassword}
									name="npassword"
								/>
							</div>
							{/* <div class="form-group">
								<label for="exampleInputEmail1">New Password</label>
								<input type="password"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									onChange={e => onChange(e)}
									value={confirmPassword}
									name="confirmPassword"
								/>
							</div> */}
							<div class="form-group">
								<button className=" btn btn btn-lg btn-block"
									onClick={clickSubmit}
									style={{ backgroundColor: "#128C7E", color: "white", fontSize: "12px", textAlign: "center" }}>
									{

										load ? (<CircularProgress size={15} style={{ color: '#FFFFFF' }} />) : "Login"
									}
								</button>
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
	load: state.loader.loading,
	alert: state.alert,
	userProfile:state.userProfile
})

export default connect(mapStateToProps, { changePassword, setAlert, loader, removeAlert })(ChangePassword);