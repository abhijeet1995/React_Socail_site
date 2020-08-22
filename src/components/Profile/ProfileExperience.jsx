import React, { Fragment } from 'react'
import Moment from 'react-moment';
import moment from 'moment';

const ProfileExperience = ({
	experience: { company, title, location, current, to, from, description }
}) => (
		<Fragment>
			<table className="table table-hover table-light table-striped ">
				<thead>
					<tr>
						<th className="font-weight-bold">Compnay</th>
						<th className="font-weight-bold">Date</th>
						<th className="font-weight-bold">Postion</th>
						<th className="font-weight-bold">Location</th>
						<th className="font-weight-bold">Description</th>
					</tr>
				</thead>
				<tbody>

					<td>{company}</td>
					<td><Moment format="YYYY/MM/DD">{moment.utc(from)}</Moment> -{' '}
						{!to ? ' Now' : <Moment format="YYYY/MM/DD">{moment.utc(to)}</Moment>}</td>
					<td>{title}</td>
					<td>{location}</td>
					<td>{description}</td>
				</tbody>
			</table>
			<hr className="lines"/>
		</Fragment>
	);


export default ProfileExperience
