import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { deleteEducation } from '../redux/actions/profile'
import PopUp from '../common/Popup'
const Education = ({ education, deleteEducation, history }) => {

	return (

		<div className="main">
			<Fragment>
				{
					console.log("exp", education)
				}
				{/* <pre>{JSON.stringify(experience)}</pre> */}
				<PopUp open={alert.open} history={history} type={alert.openType} />
				<div className="container mt-3">
					<div className="row">
						<div className="col">
							<h5 className="text-center">Education Details</h5>
						</div>
					</div>
				</div>
				<div className="container mt-3">
					<div className="row">
						<div className="col">
							<div class="table-responsive">
							<table className="table table-hover table-light table-striped text-center">
								<thead className=" text-white" style={{backgroundColor:"#333333"}}>
									<tr>
										<th>School</th>
										<th>Degree</th>
										<th>Years</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{
										education ? education.map((edu, index) => {
											return (
												<tr key={edu._id}>

													<td>{edu.school}</td>
													<td>{edu.degree}</td>
													<td>
														<Moment format="YYYY/MM/DD">{edu.form}</Moment>-
														{
															edu.to == null ? (
																'Now'
															) : (
																	<Moment format="YYYY/MM/DD">{edu.to}</Moment>
																)
														}
													</td>
													<td>
														<button onClick={() => deleteEducation(edu._id)} className="btn btn-danger btn-sm">Delete</button>
													</td>
												</tr>
											);
										})
											:
											<div>
												<p>hi</p>
											</div>
									}

								</tbody>
							</table>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		</div>
	)
}

const mapStateToProps = state => ({
	alert: state.alert,
	load: state.loader.loading,

});
export default connect(mapStateToProps, { deleteEducation })(Education)
