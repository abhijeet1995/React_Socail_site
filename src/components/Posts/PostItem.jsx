import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import { addLike, removeLike, deletePost } from '../../redux/actions/post'



const PostItem = ({
	addLike,
	removeLike,
	deletePost,
	auth,
	post: { _id, text, name, avatar, user, likes, comments, date },
	showActions
}) => {
	return (

		<div className='post bg-white p-1 my-1'>
			<div>
				<Link to={`/profile/${user}`}>
					<img className='round-img' src={avatar} alt='' />
					<p style={{ color: "#333333" }}><span>{name}</span></p>
				</Link>
			</div>
			<div>
				<p className='post-date'>
					Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
				</p>
				<p className='my-3'>{text}</p>


				{showActions && (
					<Fragment>
						<div className="d-flex">
							<div>
								<i onClick={() => addLike(_id)} className='fas fa-thumbs-up fa-2x' style={{ color: "#1976d2", cursor: "pointer" }} />
								<span>{likes.length > 0 && <span>{likes.length}</span>}Like</span>
							</div>
							<div>
							<i onClick={() => removeLike(_id)} className='fas fa-thumbs-down fa-2x' style={{ color: "#1976d2", cursor: "pointer", paddingLeft: "51px" }} />
							</div>
							<div>
							<Link to={`/posts/${_id}`}>
								
								<i class="fa fa-comment fa-2x" aria-hidden="true" style={{ paddingLeft: "51px", cursor: "pointer", color: "#1976d2" }}></i>
									{comments.length > 0 && (
										<span className='comment-count'style={{color:"#333333"}} >{comments.length}</span>
									)}
							</Link>
							</div>
							{!auth.loading && user === auth.user._id && (

								<i onClick={() => deletePost(_id)} className="fa fa-trash fa-2x" style={{ color: "red", cursor: "pointer", paddingLeft: "51px" }} />

							)}
						</div>
					</Fragment>
				)}
			</div>
		</div>
	);
}
PostItem.defaultProps = {
	showActions: true
};



const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ addLike, removeLike, deletePost }
)(PostItem);
