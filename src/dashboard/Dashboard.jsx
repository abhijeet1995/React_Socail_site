import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { getCurrentProfile } from '../redux/actions/profile'
import Spinner from '../common/Spinner'
import { Link } from 'react-router-dom'
import DashboardAction from './DashboardAction'
import Experience from './Experience'
import Education from './Education'
import {deleteAccount} from '../redux/actions/profile'
const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {

	useEffect(() => {
		getCurrentProfile()
	}, [])
	return loading && profile === null ? (
		<Spinner />
	) : (
			<Fragment>
			
				
				{profile !== null ? (
					<Fragment>
						<DashboardAction />
						<Experience experience={profile.experience} />
						{/* Only i take profile experience */}
						<Education education={profile.education}/>
						{/* <div className='my-2'>
							<button  onClick={()=>deleteAccount()} className="btn btn-danger">Delete</button>
						</div> */}
					</Fragment>
				) : (
						<Fragment>
							<p>You have not yet setup a profile, please add some info</p>
							<Link to='/create-profile' className='btn btn-primary my-1'>
								Create Profile
         					</Link>
						</Fragment>
					)}
			</Fragment>
		)
}

const mapStateToProps = state => ({
	auth: state.auth,
	profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile ,deleteAccount})(Dashboard)
