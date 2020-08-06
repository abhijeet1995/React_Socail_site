import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { deleteExperience } from '../redux/actions/profile'

import PopUp from '../common/Popup'
import LayoutSide from '../layout/LayoutSide'
const Experience = ({ experience, deleteExperience, alert, history }) => {

	return (
		<LayoutSide>
			<div className="main">
				<Fragment>
					{
						console.log("exp", experience)
					}
					{/* <pre>{JSON.stringify(experience)}</pre> */}
					<PopUp open={alert.open} history={history} type={alert.openType} />
					<div className="container mt-3">
						<div className="row">
							<div className="col">
								<h5 className="text-center" style={{ color: "#333333" }}>Experience Details</h5>
							</div>
						</div>
					</div>
					<div className="container mt-3">
						<div className="row">
							<div className="col">
								<div class="table-responsive">
									<table className="table table-hover table-light table-striped text-center">
										<thead className=" text-white" style={{ backgroundColor: "#333333" }}>
											<tr>
												<th>Compnay</th>
												<th>Title</th>
												<th>Years</th>
												<th>Actions</th>
											</tr>
										</thead>
										<tbody>
											<Fragment>
												{
													experience ? experience.map((exp, index) => {
														return (
															<tr key={exp._id}>
																{/* <td key></td> */}
																<td>{exp.company}</td>
																<td>{exp.title}</td>
																<td>
																	<Moment format="YYYY/MM/DD">{exp.form}</Moment>-
																	{
																		exp.to == null ? (
																			'Now'
																		) : (
																				<Moment format="YYYY/MM/DD">{exp.to}</Moment>
																			)
																	}
																</td>
																<td>
																	<button onClick={() => deleteExperience(exp._id)} className="btn btn-danger btn-sm">Delete</button>
																</td>
															</tr>
														);
													})
														: <Fragment>
															<tr>
																<td colSpan="7" className="text-danger font-weight-bold">No Records Found</td>
															</tr>
														</Fragment>}
											</Fragment>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</Fragment>

			</div>
		</LayoutSide>
	)
}

const mapStateToProps = state => ({
	alert: state.alert,
	load: state.loader.loading,

});
export default connect(mapStateToProps, { deleteExperience })(Experience)
