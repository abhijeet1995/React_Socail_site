import React, { Fragment,useState } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { updateUser,logout} from '../redux/actions/auth'
import {envData} from '../config/config'
import {loader} from '../redux/actions/loader'
import Snack from '../common/Snack'
import CircularProgress from '@material-ui/core/CircularProgress';

const ProfileSetting = ({
	auth: { loading, user },
	loadUser,
	updateUser,
	loader,
	updateLoader,
	load,
	logout,
}) => {

	const [formData, setFormData] = useState({
		name: user.name,
		email: user.email,
		imagePreview: user.avatar,
	});
	const [file, setFile] = useState("");
	const [open, setOpen] = useState(false);
	const [type, setType] = useState("");
	const [message, setMessage] = useState(false)

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};


	const onSubmit = (e) => {
		e.preventDefault();
		const form = new FormData();
					const config = {
						headers: {
							"content-type": "multipart/form-data",
							jwt: localStorage.getItem("token"),
						},
					};
					
					form.append("file", file);
					form.append("data", JSON.stringify(formData));
					loader(true);
					axios
						.post(`${envData.url.REACT_APP_API_URL}/profileimages`, form, config)
						.then((res) => {
							updateUser(res.data);
							loader(false);
							setMessage("User updated")
							setType("success")
							setOpen(true);
						})
						.catch((err) => {
							loader(false);
							setMessage("Not Updated")
							setType("error")
							setOpen(true)
							if (err.response && err.response.status === 401) {
								logout();
							}
							console.log(err);
						});
				}
			

	const _handleImageChange = (e) => {
		e.preventDefault();
		setFormData({
			...formData,
			imagePreview: URL.createObjectURL(e.target.files[0]),
		});
		setFile(e.target.files[0]);
	};


	
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Fragment>
			<Snack type={type}  message={message} open={open} close={handleClose} />
			<div className="container">
				<div className="row">
					<div className="col-md-4">

					</div>
					<div className="col-md-4">
						<form className="p-4">
							<div class="form-group">
								<label for="exampleInputEmail1">Name</label>
								<input type="name"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									name="name"
									value={formData.name}
									onChange={(e) => onChange(e)}
								/>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">Email</label>
								<input type="name"
									class="form-control"
									name="email"
									value={formData.email}
									onChange={(e) => onChange(e)}
								/>
							</div>


							<div className="d-flex">
								
								<img src={formData.imagePreview} alt="avt" width="50" height="50" style={{ paddingBottom: "4px" }} />
							
								<div className="form-group">
									
										<input
											className="fileInput"
											style={{ display: "" }}
											type="file"
											name="imagePreview"
											onChange={(e) => _handleImageChange(e)}
										/>
									
								</div>
							</div>

							<div class="form-group">
								<button className=" btn btn btn-lg btn-block"
									onClick={onSubmit}
									
									style={{ backgroundColor: "#FF5F6D", color: "white", fontSize: "12px", textAlign: "center" }}>
									{

										load ? (<CircularProgress size={24} style={{ color: '#FFFFFF' }} />) : "Update Profile"
									}
								</button>
							</div>

						</form>
					</div>
					<div className="col-md-4">

					</div>
				</div>
			</div>
		</Fragment>
	)
}



const mapStateToProps = (state) => ({
	auth: state.auth,
	load: state.loader.loading,
});
export default connect(mapStateToProps, {
	loader,
	updateUser,
	logout,
})(ProfileSetting);
