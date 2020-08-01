import React,{useEffect, Fragment} from 'react'
import {connect} from 'react-redux'
import {getSinglePost} from '../../redux/actions/post'
import Spinner from '../../common/Spinner'
import PostItem from '../Posts/PostItem'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'
const SinglePost = ({getSinglePost,post:{post,loading},match}) => {

	useEffect(()=>{
		getSinglePost(match.params.id)
	},[])
	return loading || post ==null ? (
		 <Spinner/> 
		 ):(
		<Fragment>
			<div className="container-fluid">
				<div className="row">
						<div className="col-md-2">
							
						</div>
						<div className="col-md-8">
							<PostItem post={post} showActions={false} />
							<CommentForm postId={post._id}/>
							<div>
								{
									post.comments.map((comment)=>(
										<CommentItem key={comment._id} comment={comment} postId={post._id}  />
									))
								}
							</div>
						</div>
						<div className="col-md-2">

						</div>
				</div>
			</div>
		</Fragment> 
		)
}

const mapStateToProps = state =>({
	post:state.post
})

export default connect(mapStateToProps, { getSinglePost })(SinglePost)
