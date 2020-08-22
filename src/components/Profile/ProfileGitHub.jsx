import React,{Fragment, useEffect} from 'react'
import {connect} from 'react-redux' 
import {getGitRepos} from '../../redux/actions/profile'
import Spinner from '../../common/Spinner'
const ProfileGitHub = ({username,getGitRepos,repos}) => {


	useEffect(() => {
		getGitRepos(username)
	}, [])

	return (
		<Fragment>
			{
				console.log("=>",repos)
			}
		<div className='profile-github'>
			<h6 className="my-1">Github Repos</h6>
			{repos === null ? (
				<Spinner />
			) :(
				repos.length > 0 ? (
								repos.map(repo => (
									// <div key={repo.id} className='repo bg-white p-1 my-1'>
									// 	<div>
									// 		<h4>
									// 			<a
									// 				href={repo.html_url}
									// 				target='_blank'
									// 				rel='noopener noreferrer'
									// 			>
									// 				{repo.name}
									// 			</a>
									// 		</h4>
									// 		<p>{repo.description}</p>
									// 	</div>
									// 	<div>
									// 		<ul>
									// 			<li className='badge badge-primary'>
									// 				Stars: {repo.stargazers_count}
									// 			</li>
									// 			<li className='badge badge-dark'>
									// 				Watchers: {repo.watchers_count}
									// 			</li>
									// 			<li className='badge badge-light'>Forks: {repo.forks_count}</li>
									// 		</ul>
									// 	</div>
									// </div>
									<div  class="table-responsive">
										<table className="table  table-striped">
											<thead>
												<tr>
													<th>Repo</th>
													<th>Description</th>
													<th>stargazers</th>
													<th>watchers</th>
													<th>forks</th>
													<th>Actions</th>
												</tr>
											</thead>
											<tbody>
												<Fragment>
											
																<tr key={repo.id}>
																	<td>{repo.name}</td>
																	<td>{repo.description}</td>
																	<td>{repo.stargazers_count}</td>
																	<td>{repo.watchers_count}</td>
																	<td>{repo.forks}</td>
																	<td>
															<button className="btn btn-primary btn-sm">
																<a
																	href={repo.html_url}
																	target='_blank'
																	rel='noopener noreferrer'
																>
																	{repo.name}
																</a>
																		</button>
																	</td>
																</tr>
															
												</Fragment>
											</tbody>
										</table>
										</div>
									// <p>{profile.user?.name}</p>
								))
							) : (
									<h4>No profiles found...</h4>
								)
			)
			}
		</div>
		</Fragment>
	)
}

const mapStateToProps = state =>({
	repos:state.profile.repos
})

export default connect(mapStateToProps,{getGitRepos}) (ProfileGitHub)
