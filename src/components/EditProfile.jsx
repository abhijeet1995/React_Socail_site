import React, { useState, Fragment,useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import { setAlert, removeAlert } from '../redux/actions/alert'
import { loader } from '../redux/actions/loader'
import { createProfile, getCurrentProfile } from '../redux/actions/profile'
import PopUp from '../common/Popup'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import LayoutSide from '../layout/LayoutSide';

const EditProfile = ({ profile:{profile,loading}, setAlert, loader, createProfile, history, alert, load,getCurrentProfile }) => {
	const [formData, setFormData] = useState({
		company: "",
		website: '',
		location: "",
		status: "",
		skills: "",
		githubusername: "",
		bio: '',
		twitter: "",
		facebook: "",
		linkedin: "",
		youtube: "",
		instagram: ''
	})
	const [displaySocailInputs, toggleSocailInputs] = useState(false)

	useEffect(()=>{
		getCurrentProfile()
		setFormData({
			company: loading || !profile.company ? '' : profile.company,
			website: loading || !profile.website ? '' : profile.website,
			location: loading || !profile.location ? '' : profile.location,
			status: loading || !profile.status ? '' : profile.status,
			skills: loading || !profile.skills ? '' : profile.skills.join(','),
			githubusername:
				loading || !profile.githubusername ? '' : profile.githubusername,
			bio: loading || !profile.bio ? '' : profile.bio,
			twitter: loading || !profile.social ? '' : profile.social.twitter,
			facebook: loading || !profile.social ? '' : profile.social.facebook,
			linkedin: loading || !profile.social ? '' : profile.social.linkedin,
			youtube: loading || !profile.social ? '' : profile.social.youtube,
			instagram: loading || !profile.social ? '' : profile.social.instagram
		});
	},[loading])
	const { company, website, location, status, skills, githubusername,
		bio, twitter, facebook, linkedin, youtube, instagram
	} = formData

	const handleChange = name => event => {
		setFormData({ ...formData, [name]: event.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		createProfile(formData, history,true)
	}

	const backButton = () =>{
		history.push('/dashboard')
	}

	return (
		<LayoutSide>
		<Fragment>
			<ArrowBackIosIcon onClick={backButton}  style={{display:"cursor"}} />
				<PopUp open={alert.open} history={history} type={alert.openType} link={"/dashboard"} />
			
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						
					</div>
					<div className="col-md-4">
						
						<form>
							<div className="form-group">
								<label for="exampleFormControlSelect1">Select Professional Status</label>
								<select className="form-control" id="exampleFormControlSelect1" value={status} onChange={handleChange("status")} >
									<option value="0">* Select Professional Status</option>
									<option value="Developer">Developer</option>
									<option value="Junior Developer">Junior Developer</option>
									<option value="Senior Developer">Senior Developer</option>
									<option value="Manager">Manager</option>
									<option value="Student or Learning">Student or Learning</option>
									<option value="Instructor">Instructor or Teacher</option>
									<option value="Intern">Intern</option>
									<option value="Other">Other</option>
								</select>
							</div>
							<div className="form-group">
								<label for="exampleInputEmail1">Company</label>
								<input type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									value={company}
									onChange={handleChange("company")}
								/>
							</div>
							<div className="form-group">
								<label for="exampleInputEmail1">Website</label>
								<input type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									value={website}
									onChange={handleChange("website")}
								/>
							</div>
							<div className="form-group">
								<label for="exampleInputEmail1">Location</label>
								<input type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									value={location}
									onChange={handleChange("location")}

								/>
							</div>
							<div className="form-group">
								<label for="exampleInputEmail1">Skills</label>
								<input type="text"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									value={skills}
									onChange={handleChange("skills")}

								/>
							</div>
							<div className="form-group">
								<label for="exampleInputEmail1">Github UserName</label>
								<input type="text"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									value={githubusername}
									onChange={handleChange("githubusername")}

								/>
							</div>
							<div className="form-group">
								<label for="exampleFormControlTextarea1">A short bio</label>
								<textarea className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
									value={bio}
									onChange={handleChange("bio")}
								/>
							</div>

							<div className="my-2">
								<button onClick={() => toggleSocailInputs(!displaySocailInputs)} type="button" class="btn btn-danger">
									Add Social Network Links
          						</button>
								<span>Optional</span>
							</div>

							{
								displaySocailInputs &&
								<Fragment>
									<div className="form-group">
										<input type="text"
											placeholder="Twitter URL"
											className="form-control"
											value={twitter}
											onChange={handleChange("twitter")}
										/>
									</div>
									<div className="form-group">
										<input type="text"
											placeholder="Facebook URL"
											className="form-control"
											value={facebook}
											onChange={handleChange("facebook")}
										/>
									</div>
									<div className="form-group">
										<input type="text"
											placeholder="Youtube URL"
											className="form-control"
											value={youtube}
											onChange={handleChange("youtube")}
										/>
									</div>
									<div className="form-group">
										<input type="text"
											placeholder="Linkend URL"
											className="form-control"
											value={linkedin}
											onChange={handleChange("linkedin")}
										/>
									</div>
									<div className="form-group">
										<input type="text"
											placeholder="Insagram URL"
											className="form-control"
											value={instagram}
											onChange={handleChange("instagram")}
										/>
									</div>

								</Fragment>
							}

							<div className="form-group">
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
	isAuthenticated: state.auth.isAuthenticated,
	alert: state.alert,
	load: state.loader.loading,
	profile:state.profile
});

export default connect(mapStateToProps, { createProfile,getCurrentProfile, setAlert, removeAlert, loader })(withRouter(EditProfile));
