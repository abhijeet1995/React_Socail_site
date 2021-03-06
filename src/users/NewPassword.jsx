import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { setAlert } from '../redux/actions/alert'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import PopUp from '../common/Popup'
import {envData} from '../config/config'
const NewPassword = ({ alert, setAlert }) => {
	const history = useHistory()
	const { token } = useParams()
	const [values, setValues] = useState({
		password: "",
		confirmPassword: "",
		loading: false
	})

	const { password, confirmPassword, loading } = values
	const handleChange = name => event => {
		setValues({ ...values, [name]: event.target.value });
	};



	const clickSubmit = () => {
		if (password !== confirmPassword) {
			return setAlert("Password donot match")
		}
		
		setValues({ ...values, loading: true });
		axios({
			method: "POST",
			url: `${envData.url.REACT_APP_API_URL}/auth/new-password`,
			data: { password, token }
		}).then((response) => {
			console.log("Password Updated", response);
			setAlert(response.data.message)
			setValues({
				...values,
				loading: false,
				password: ""
			})
		}).catch((error) => {
			setValues({
				...values,
				loading: false
			})
			setAlert(error.response.data.error)
		})
	}
	

	return (
		<div>

			<PopUp open={alert.open} history={history} type={alert.openType} link={"/"} />
			<div className="container">
				<div className="row">
					<div className="col-md-4">

					</div>
					<div className="col-md-4">
						<div class="form-group">
							<label for="exampleInputEmail1">Password</label>
							<input type="password"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								value={password}
								onChange={handleChange("password")}
							/>
						</div>
						<div class="form-group">
							<label for="exampleInputEmail1">Confirm Password</label>
							<input type="password"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								value={confirmPassword}
								onChange={handleChange("confirmPassword")}
							/>
						</div>
						<div class="form-group">
							<button className=" btn btn btn-lg btn-block"
								onClick={clickSubmit}
								style={{ backgroundColor: "#128C7E", color: "white", fontSize: "12px", textAlign: "center" }}>
								{

									loading ? (<CircularProgress size={15} style={{ color: '#ffffff' }} />) : "Password Update"
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
const mapStateToProps = state => ({
	alert: state.alert
})

export default connect(
	mapStateToProps,
	{ setAlert }
)(NewPassword)

