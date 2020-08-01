import React ,{useEffect, Fragment}from 'react'
import {connect} from 'react-redux'
import Spinner from '../../common/Spinner'
import {getProfileById} from '../../redux/actions/profile'
import {Link} from 'react-router-dom'
import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import ProfileExperience from './ProfileExperience'
import ProfileEducation from './ProfileEducation'
import ProfileGitHub from './ProfileGitHub'
const Profile = ({
	getProfileById,
	profile: { profile, loading } ,
	//profile,
	auth,
	match
}) =>{

	useEffect(()=>{
		getProfileById(match.params.id)
	}, [])

	return (
		<Fragment>
			{
				// console.log("hello",auth.user._id),
				// console.log("hi", profile.profiles[0].user._id)
			}
			{
				 profile === null || loading ? (
					<Spinner/>
				) :(
					<Fragment>
							<Link to="/profile" className='btn btn-light'>
								Back To Profiles
         					</Link>
							 {
								auth.isAuthenticated && auth.loading === false &&  auth.user._id === profile.user._id && (
									<Link to='/edit-profile' className='btn btn-dark'>
										Edit Profile
									</Link>
								)
							 }  
							
							
					</Fragment>
				)
			}
			<div className="profile p-2">
				<ProfileTop profile={profile} />
				<ProfileAbout profile={profile}/> 
				<div className='profile-exp bg-white p-2'>
					<h2 className='text-primary'>Experience</h2>
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
							<h4>No experience credentials</h4>
						)}
					
				</div>

				<div className='profile-edu bg-white p-2'>
					<h2 className='text-primary'>Education</h2>
					{ profile && profile.education.length > 0 ? (
						<Fragment>
							{profile.education.map(education => (
								<ProfileEducation
									key={education._id}
									education={education}
								/>
							))}
						</Fragment>
					) : (
							<h4>No education credentials</h4>
						)}

					
				</div>
					
					{ profile && profile.githubusername && (
						<ProfileGitHub username={profile.githubusername} />
					)}
						
			</div>
		</Fragment>
	)
}

const mapStateToProps = state => ({
	auth: state.auth,
	profile: state.profile
});


export default connect(mapStateToProps,{getProfileById})( Profile)
