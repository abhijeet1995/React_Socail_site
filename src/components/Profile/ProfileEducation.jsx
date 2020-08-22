import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';

const ProfileEducation = ({
	education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
		
		<Fragment>
			<table className="table table-hover table-light table-striped ">
				<thead>
					<tr>
						<th className="font-weight-bold">School</th>
						<th className="font-weight-bold">Date</th>
						<th className="font-weight-bold">Degree</th>
						<th className="font-weight-bold">Field Of study</th>
						<th className="font-weight-bold">Description</th>
					</tr>
				</thead>
				<tbody>

					<td>{school}</td>
					<td>
						<p>
					<Moment format="YYYY/MM/DD">{moment.utc(from)}</Moment> -{' '}
		 		{!to ? ' Now' : <Moment format="YYYY/MM/DD">{moment.utc(to)}</Moment>}
		 			</p>
					</td>
					<td>{degree}</td>
					<td>{fieldofstudy}</td>
					<td>{description}</td>
				</tbody>
			</table>


		</Fragment>
	);

ProfileEducation.propTypes = {
	education: PropTypes.object.isRequired
};

export default ProfileEducation;
