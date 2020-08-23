import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../redux/actions/post'
import {removeAlert } from '../../redux/actions/alert'
import { loader } from '../../redux/actions/loader'
import { CircularProgress } from '@material-ui/core'
import Snack from '../../common/Snack'
const CommentForm = ({ postId, addComment, alert, load, removeAlert }) => {
	const [text, setText] = useState('')

	const onSubmit = (e) => {
		e.preventDefault()
		addComment(postId,{ text })
		setText('')
	}

	const handleClose = () => {
		removeAlert()
	}

	return (
		<>
		<div>
			<Snack type={alert.type} key="EMAIL" message={alert.message} open={alert.open} close={handleClose} />
			<div class="form-group">
				
				<textarea className="form-control"
					id="exampleFormControlTextarea1"
					rows="3"
					name='text'
					cols='30'
					rows='3'
					placeholder='comment'
					value={text}
					onChange={e => setText(e.target.value)}
				/>
			</div>
			<div class="form-group">
				<button className=" btn btn btn-lg btn-block"
					onClick={onSubmit}
					style={{ backgroundColor: "#128C7E", color: "white", fontSize: "12px", textAlign: "center" }}>
					{
						load ? (<CircularProgress size={15} style={{ color: "white" }} />) : "submit"
					}
				</button>
			</div>
		</div>
		</>
	)
}
const mapStateToProps = state => ({
	alert: state.alert,
	load: state.loader.loading,

});
export default connect(mapStateToProps, { addComment, loader, removeAlert })(CommentForm)
