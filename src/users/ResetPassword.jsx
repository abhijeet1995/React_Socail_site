import React from 'react'
import { useState } from 'react'
import {passwordReset} from '../redux/actions/auth'
import {setAlert,removeAlert} from '../redux/actions/alert'
import {loader} from '../redux/actions/loader'
import CircularProgress from '@material-ui/core/CircularProgress';
import {connect} from 'react-redux'
import PopUp from '../common/Popup'
const ResetPassword = ({ alert, removeAlert,load,loader,passwordReset}) => {


	const [formData, setFormData] = useState({
		email: '',
	});
	
	const { email } = formData;
	const onChange = e => setFormData({
		...formData,
		[e.target.name]: e.target.value
	});

	const onSubmit = e => {
		e.preventDefault();
			passwordReset({ email });
		
	}
	const handleClose = () => {
		console.log("Clear")
		removeAlert()
	}

	return (
		
		<div>
			{
				alert.open &&
				<PopUp open={alert.open} removeAlert={removeAlert} />
			}
			<div className="container">
				<div className="row">
					<div className="col-md-4">

					</div>
					<div className="col-md-4">
						<div class="form-group mt-3">
							<label for="exampleInputEmail1">Email</label>
							<input type="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								name='email'
								value={email}
								onChange={(e) => onChange(e)}
							/>
						</div>
						<div class="form-group">
							<button className=" btn btn btn-lg btn-block"
								onClick={onSubmit}
								style={{ backgroundColor: "#128C7E", color: "white", fontSize: "12px", textAlign: "center", borderRadius: "50px", marginTop: "22px", padding: "10px"}}>
								{

									load ? (<CircularProgress size={15} style={{ color: '#ffffff' }} />) : "Reset Password"
								}
							</button>
						</div>
					</div>
					<div className="col-md-4">

					</div>
				</div>
			</div>
		</div>
	)
}
const mapStateToProps = state =>({
	alert:state.alert,
	load: state.loader.loading,
})

export default connect(mapStateToProps, { setAlert, loader, removeAlert, passwordReset })(ResetPassword);