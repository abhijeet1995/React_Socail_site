import React,{useEffect, Fragment} from 'react'
import {connect} from 'react-redux'
import Spinner from '../../common/Spinner'
import {getPost} from '../../redux/actions/post'
import PostItem from './PostItem'
import PostForm from './PostForm'
const Post = ({ getPost, post: { posts, loading}}) => {

	useEffect(() => {
		getPost()
	}, [])

	return loading ? <Spinner/> : (
		<Fragment>
			<h4 className="text-center">Add Post</h4>
			<div>
				<PostForm/>
			</div>
			<div>
				
					{ posts && posts.length > 0 ? (
						<Fragment>
							{posts.map(post => (
								<PostItem key={post._id} post={post} />
							))}
						</Fragment>
					) : (
							<h4>No Post Found</h4>
						)}

				
			</div>
		</Fragment>
	)
}

const mapStateToProps = state =>({
	post : state.post
})




export default connect(mapStateToProps, { getPost })(Post)