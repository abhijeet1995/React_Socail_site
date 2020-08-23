import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import Spinner from '../../common/Spinner'
import { getProfileById } from '../../redux/actions/profile'
import { Link } from 'react-router-dom'
import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import ProfileExperience from './ProfileExperience'
import ProfileEducation from './ProfileEducation'
import ProfileGitHub from './ProfileGitHub'
const Profile = ({
	getProfileById,
	profile: { profile, loading },
	//profile,
	auth,
	match
}) => {

	useEffect(() => {
		getProfileById(match.params.id)
	}, [getProfileById, match.params.id])

	return (
		<Fragment>
			{
				// console.log("hello",auth.user._id),
				// console.log("hi", profile.profiles[0].user._id)
			}
			{
				profile === null || loading ? (
					<Spinner />
				) : (
						<Fragment>
							<i class="fas fa-arrow-left">
								<Link to="/profile" style={{ color: "black", fontSize: "12px" }}>
									Back To Profile
         					</Link>
							</i>



							<div className="conatiner-fluid mt-3">
								<div className="row">
									<div className="col-md-3 border-line">
										<ProfileTop profile={profile} />
										{
											auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && (
												<Link to='/edit-profile' className="btn btn" style={{ backgroundColor: "#128C7E", color: "white", fontSize: "9px", borderRadius: "50px", padding: "7px", marginTop: "0px", marginBottom: "11px" }}>
													Edit Profile
												</Link>
											)
										}
									</div>
									<div className="col-md-9 ">
										<h4 style={{ marginBottom: "41px" }}>Experience Deatils</h4>
										{profile && profile.experience.length > 0 ? (
											<Fragment>
												{profile.experience.map(experience => (
													<ProfileExperience
														key={experience._id}
														experience={experience}
													/>
												))}
											</Fragment>
										) : (
												<Link to="/add-experience" style={{ fontSize: "12px", color: "#333333" }}> <h6 className="text-center">Experience Deails Not add Please Add click here!</h6></Link>
											)}
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-3">
									<ProfileAbout profile={profile} />
								</div>
								<div className="col-md-9">
									<h4>Education Details</h4>
									{profile && profile.education.length > 0 ? (
										<Fragment>
											{profile.education.map(education => (
												<ProfileEducation
													key={education._id}
													education={education}
												/>
											))}
										</Fragment>
									) : (
											<Link to="/add-education" style={{ fontSize: "12px", color: "#333333" }}> <h6 className="text-center">Education Details Not add Please Add click here!</h6></Link>
										)}
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									{profile.githubusername && (
										<ProfileGitHub username={profile.githubusername} />
									)}
								</div>
							</div>
						</Fragment>
					)}
		</Fragment>
	)
}

const mapStateToProps = state => ({
	auth: state.auth,
	profile: state.profile
});


export default connect(mapStateToProps, { getProfileById })(Profile)
