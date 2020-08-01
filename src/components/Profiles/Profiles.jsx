import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { getALlProfile } from '../../redux/actions/profile'
import Spinner from '../../common/Spinner'
import ProfileItems from './ProfileItems'
import {Link} from 'react-router-dom'
const Profiles = ({ getALlProfile, profile: { profiles, loading } }) => {

	useEffect(() => {
		getALlProfile()
	}, [getALlProfile])

	return (
		<Fragment>
			{loading ? (
				<Spinner />
			) : (
					<Fragment>
						{/* <h4 className="text-center p-3" style={{color:"#333333"}}>Developers</h4>
						
						<div className='container-fluid'>
							{profiles.length > 0 ? (
								profiles.map(profile => (
									<ProfileItems key={profile._id} profile={profile} />
									// <p>{profile.user?.name}</p>
								))
							) : (
									<h4>No profiles found...</h4>
								)}
						</div> */}
						<div className="container mt-3 p-4">
							<div className="row">
								<div className="col">
									<div className="table-responsive">
									<table className="table table-hover table-striped text-center table-light">
										<thead className="text-white" style={{backgroundColor:"#333333"}}>
											<tr>
												<th>Image</th>
												<th>Name</th>
												<th>Status</th>
												<th>Company</th>
												<th>Location</th>
												<th>Skills</th>
												<th>ACTION</th>
											</tr>
										</thead>
										<tbody>
											{
												profiles.length> 0 ?
													<Fragment>
														{
															profiles.map((profile, index) => {
																return (
																	<tr>
																		<td>
																			<img src={profile.user.avatar} alt="" width="50" height="50" />
																		</td>
																		<td>{profile.user.name}</td>
																		<td>{profile.status}</td>
																		<td>{profile.company && profile.company}</td>
																		<td>{profile.location && profile.location}</td>
																		<td>
																			{
																				profile.skills.slice(0, 4).map((skill, index) => (
																					<li key={index} style={{ listStyle: "none" }}>
																						{skill}
																					</li>

																				))
																			}
																		</td>
																		<td>
																			<Link to={`/profile/${profile.user._id}`} className="btn btn-sm text-white" style={{ backgroundColor:"#FF5F6D"}}>View More</Link>
																		</td>
																	</tr>
																);
															})
														}
													</Fragment> :
													<Fragment>
														<tr className="text-danger font-weight-bold">
															<td colSpan="7">No Records Found!</td>
														</tr>
													</Fragment>
											}
										</tbody>
									</table>
									</div>
								</div>
							</div>
						</div>
					</Fragment>
				)}
		</Fragment>
	)
}

const mapStateToProps = (state) => ({
	profile: state.profile
})




export default connect(mapStateToProps, { getALlProfile })(Profiles)
