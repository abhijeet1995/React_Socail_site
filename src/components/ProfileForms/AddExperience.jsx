import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addExperience } from '../../redux/actions/profile'
import {setAlert,removeAlert} from '../../redux/actions/alert'
import {loader} from '../../redux/actions/loader'
import  PopUp from '../../common/Popup'
import CircularProgress from '@material-ui/core/CircularProgress';
import LayoutSide from '../../layout/LayoutSide';
const AddExperience = ({ addExperience, setAlert, loader, createProfile, history, alert, load}) => {
	const [formData,setFormData] = useState({
		company: '',
		title: '',
		location: '',
		from: '',
		to: '',
		current: false,
		description: ''
	})

	const [toDateDisabled, toggleDisabled] = useState(false);

	const { company, title, location, from, to, current, description } = formData;

	const handleChange = name => event => {
		setFormData({ ...formData, [name]: event.target.value });
	};


	const  onSubmit = (e) =>{
		e.preventDefault();
		addExperience(formData, history);
	}

	const handleClose = () => {
		removeAlert()
	}


	return (
		<LayoutSide>
		<Fragment>
			<PopUp open={alert.open} history={history} type={alert.openType} link={"/dashboard"} />
			<div className="container p-4">
				<div className="row">
					<div className="col-md-4">

					</div>
					<div className="col-md-4">
							

						<form>
							<div class="form-group">
								<label for="exampleInputEmail1">Job Title</label>
								<input type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									value={title}
									onChange={handleChange("title")}
								/>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">Company</label>
								<input type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									value={company}
									onChange={handleChange("company")}
								/>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">Location</label>
								<input type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									value={location}
									onChange={handleChange("location")}
								/>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">From Date</label>
								<input type="date"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									value={from}
									onChange={handleChange("from")}
								/>
							</div>
							<div class="form-group">
								<p>
									<input
										type='checkbox'
										name='current'
										checked={current}
										value={current}
										onChange={() => {
											setFormData({ ...formData, current: !current });
											toggleDisabled(!toDateDisabled);
										}}
									/>{' '}
           							 Current Job
         						 </p>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">From Date</label>
								<input type="date"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									value={to}
									onChange={handleChange("onChange")}
									disabled={toDateDisabled ? 'disabled' : ''}
								/>
							</div>
							<div class="form-group">
								<label for="exampleFormControlTextarea1">Job Description</label>
								<textarea className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									value={description}
									onChange={handleChange("description")}
								/>
							</div>
							<div class="form-group">
								<button className=" btn btn btn-lg btn-block"
									onClick={onSubmit}
										style={{ backgroundColor: "#128C7E", color: "white", fontSize: "12px", textAlign: "center" }}>
									{
										load ? (<CircularProgress size={15} style={{ color: "white" }} />) : "submit"
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
		</LayoutSide>
	)
}



const mapStateToProps = state => ({
	alert: state.alert,
	load: state.loader.loading,
	
});

export default connect(mapStateToProps, { setAlert, removeAlert, loader,addExperience })(withRouter(AddExperience));
