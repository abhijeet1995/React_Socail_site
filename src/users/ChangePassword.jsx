import React, { useState } from 'react'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import { loader } from '../redux/actions/loader'
import { setAlert, removeAlert } from '../redux/actions/alert';
import PopUp from '../common/Popup'



const ChangePassword = ({ load, loader, alert, removeAlert }) => {
	// const [formData, setFormData] = useState({
	
	// })

	// const { email, password } = formData
	// const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
	

	// const onSubmit = async e => {
	// 	e.preventDefault();
	// 	login(email, password)

	// }

	
	
	return (
		<div>
			<PopUp open={alert.open} type={alert.openType} />
			<div className="container p-5">
				<div className="row">
					<div className="col-md-4">

					</div>
					<div className="col-md-4">
						<form>
							<div class="form-group">
								<label for="exampleInputEmail1">Old Password</label>
								<input type="name"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									
									
								/>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">New Password</label>
								<input type="password"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									
									
								/>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">Confirm Password</label>
								<input type="password"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
								/>
							</div>
							<div class="form-group">
								{/* <button className=" btn btn btn-lg btn-block"
									onClick={onSubmit}
									style={{ backgroundColor: "#FF5F6D", color: "white", fontSize: "12px", textAlign: "center" }}>
									{

										load ? (<CircularProgress size={24} style={{ color: '#FFFFFF' }} />) : "Login"
									}
								</button> */}
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
	alert: state.alert
})

export default connect(mapStateToProps, { setAlert, loader, removeAlert })(ChangePassword);