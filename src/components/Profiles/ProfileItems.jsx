import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const ProfileItems = () => {

	//console.log("==>>", profile.user._id)
	return (
		<div>

		</div>
		// <div className="container">
		// 	<div className="row">
		// 		<div className="col">
		// 			<table className="table table-striped table-hover text-center">
		// 				<thead className="bg-primary text-white">
		// 					<tr>
		// 						<th>Image</th>
		// 						<th>Name</th>
		// 						<th>Status</th>
		// 						<th>Company</th>
		// 						<th>Location</th>
		// 						<th>Skills</th>
		// 						<th>ACTION</th>
		// 					</tr>
		// 				</thead>
		// 				<tbody>
		// 					<tr>
		// 						<td>
		// 							<img src={profile.user.avatar} alt="" width="50" height="50" />
		// 						</td>
		// 						<td>{profile.user.name}</td>
		// 						<td>{profile.status}</td>
		// 						<td>{profile.company && profile.company}</td>
		// 						<td>{profile.location && profile.location}</td>
		// 						<td>
		// 							{
		// 								profile.skills.slice(0, 4).map((skill, index) => (
		// 									<li key={index} style={{ listStyle: "none" }}>
		// 										{skill}
		// 									</li>

		// 								))
		// 							}
		// 						</td>
		// 						<td>
		// 							<Link to={`/profile/${profile.user._id}`} className="btn btn-success btn-sm text-white">View More</Link>
		// 						</td>
		// 					</tr>
		// 				</tbody>
		// 			</table>
		// 		</div>
		// 	</div>
		// </div>
	);
};


export default ProfileItems
