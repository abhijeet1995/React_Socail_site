import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import {deleteComment} from '../../redux/actions/post'
const CommentItem = ({ postId,comment:{_id,text,name,avatar,user,date},auth,deleteComment}) => {
	return (
		<>
		<div>
			<div className="post bg-white">
				<div>
					<Link to={`/profile/${user}`}>
						<img
							className="round-img"
							src={avatar}
							alt=""
						/>
						<p>{name}</p>
					</Link>
				</div>
				<div>
					<p className="post-date"> Posted on &nbsp;
						<Moment format='YYYY/MM/DD'>{date}</Moment>
					</p>
					<p className="my-1">
					{text}	
            		</p>
					
					{!auth.loading && user === auth.user._id && (

						<i onClick={() => deleteComment(postId,_id)} className="fa fa-trash fa-1x" style={{ color: "red", cursor: "pointer", paddingLeft: "51px" }} />

					)}
				</div>
			</div>
		</div><hr/>
		</>
	)
}

const mapStateToProps = state =>({
	auth:state.auth
})

export default connect(mapStateToProps,{deleteComment}) (CommentItem)
