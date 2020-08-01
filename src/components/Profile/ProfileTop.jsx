import React from 'react';


const ProfileTop = ({ profile: { status, company, location, website, social, user: { name, avatar } } }) => {
	return (
		<div className='container  p-2'>
			<div className="row">
			
			<div className="card p-2">
				<img className='round-img my-1' src={avatar} width="100" height="100" alt='' />
				<p>{name}</p>
				<p>
					{status && status} {company && <span> at {company}</span>}
				</p>
				<p>{location && <span>{location}</span>}</p>
			</div>
			</div>
		</div>
	);
};



export default ProfileTop;
