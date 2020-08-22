import React from 'react';


const ProfileTop = ({ profile: { status, company, location, website, social, user: { name, avatar } } }) => {
	return (
		<div>
			<img  src={avatar} alt='' height="80" width="80" style={{borderRadius:"50px",marginBottom:"11px"}} />
			<div style={{lineHeight:"11px"}}>
			<p className="text-capitalize">{name}</p>
			<p className="text-capitalize">
				{status} {company && <span> at {company}</span>}
			</p>
			<p className="text-capitalize">{location && <span>{location}</span>}</p>
			</div>
			<div className='d-flex justify-content-between mb-3'>
				{website && (
					<a href={website} target='_blank' rel='noopener noreferrer'>
						<i className='fas fa-globe fa-1x' />
					</a>
				)}
				{social && social.twitter && (
					<a href={social.twitter} target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-twitter fa-1x' />
					</a>
				)}
				{social && social.facebook && (
					<a href={social.facebook} target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-facebook fa-1x' />
					</a>
				)}
				{social && social.linkedin && (
					<a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-linkedin fa-1x' />
					</a>
				)}
				{social && social.youtube && (
					<a href={social.youtube} target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-youtube fa-1x' />
					</a>
				)}
				{social && social.instagram && (
					<a href={social.instagram} target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-instagram fa-1x' />
					</a>
				)}
			</div>
		</div>
	);
};



export default ProfileTop;
