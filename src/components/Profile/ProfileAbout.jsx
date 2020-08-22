import React, { Fragment } from 'react';

const ProfileAbout = ({
	profile: {
		bio,
		skills,
		user: { name }
	}
}) => (
		<div>
			{bio && (
				<Fragment>
					<h6 className="text-capitalize">{name.trim().split(' ')[0]} Bio</h6>
					<p>{bio}</p>
					<div/>
				</Fragment>
			)}
			<h6>Skill Set</h6>
			<div className='skills'>
				{skills.map((skill, index) => (
					<div key={index} className='p-1'>
						<i className='fas fa-check' /> {skill}
					</div>
				))}
			</div>
		</div>
	);


export default ProfileAbout;
