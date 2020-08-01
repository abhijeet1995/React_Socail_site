import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addEducation } from '../../redux/actions/profile'
import { setAlert, removeAlert } from '../../redux/actions/alert'
import { loader } from '../../redux/actions/loader'
import PopUp from '../../common/Popup'
import CircularProgress from '@material-ui/core/CircularProgress';
import LayoutSide from '../../layout/LayoutSide';
const AddEducation = ({ addEducation, history, alert, load }) => {
	const [formData, setFormData] = useState({
		school: '',
		degree: '',
		fieldofstudy: '',
		from: '',
		to: '',
		current: false,
		description: ''
	});

	const [toDateDisabled, toggleDisabled] = useState(false);
	const {
		school,
		degree,
		fieldofstudy,
		from,
		to,
		current,
		description
	} = formData;
	const onChange = e =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		addEducation(formData, history);
	}

	const handleClose = () => {
		removeAlert()
	}


	return (
		<LayoutSide>
		<Fragment>
			<PopUp open={alert.open} history={history} type={alert.openType} link={"/dashboard"} />
			<div className="container">
				<div className="row">
					<div className="col-md-4">

					</div>
					<div className="col-md-4">
					

						<form>
							<div class="form-group">
								<label for="exampleInputEmail1">School</label>
								<input type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									name='school'
									value={school}
									onChange={e => onChange(e)}
								/>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">Degree</label>
								<input type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									name='degree'
									value={degree}
									onChange={e => onChange(e)}
								/>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">Fieldofstudy</label>
								<input type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									name='fieldofstudy'
									value={fieldofstudy}
									onChange={e => onChange(e)}
								/>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">From Date</label>
								<input type="date"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									name='from'
									value={from}
									onChange={e => onChange(e)}
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
           							 Current  School
         						 </p>
							</div>
							<div class="form-group">
								<label for="exampleInputEmail1">To Date</label>
								<input type="date"
									className="form-control"
									type='date'
									name='to'
									value={to}
									onChange={e => onChange(e)}
									disabled={toDateDisabled ? 'disabled' : ''}
								/>
							</div>
							<div class="form-group">
								<label for="exampleFormControlTextarea1"> Description</label>
								<textarea className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									name='description'
									cols='30'
									rows='5'
									placeholder='Program Description'
									value={description}
									onChange={e => onChange(e)}
								/>
							</div>
							<div class="form-group">
								<button className=" btn btn btn-lg btn-block"
									onClick={onSubmit}
										style={{ backgroundColor: "#FF5F6D", color: "white", fontSize: "12px", textAlign: "center" }}>
									{
										load ? (<CircularProgress size={16} style={{ color: "white" }} />) : "submit"
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

export default connect(
	mapStateToProps,
	{ addEducation ,setAlert,removeAlert,loader}
)(withRouter(AddEducation));

