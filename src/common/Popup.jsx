
import React, { useState } from "react";

//material-ui
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { removeAlert } from "../redux/actions/alert";
import { connect, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { REMOVE_ALERT } from "../redux/actions/type";

function Popup({ open, alert, type, removeAlert, localText, link, onClick }) {
	const dispatch = useDispatch();
	const [redirect, setRedirect] = React.useState(false);

	function handler() {
		if (type === 1) {
			setRedirect(true);
			removeAlert();
		} else {
			removeAlert();
		}
	}

	return (
		<>
			<Dialog
				open={open}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				{redirect ? <Redirect to={link} /> : ""}
				<DialogContent>
					<Paper style={{ padding: 30, width: 450 }} elevation={0}>
						<Typography style={{ fontFamily: "semibold", fontSize: "16px" }}>
							{localText ? localText : alert.message}
						</Typography>
					</Paper>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={onClick ? onClick : handler}
						color="primary"
						autoFocus
						style={{ backgroundColor: "#FF5F6D", color: "#fff" }}
					>
						Ok
          </Button>
				</DialogActions>
			</Dialog>
		</>
	);
}

const mapStateToProps = state => ({
	alert: state.alert
});

export default connect(mapStateToProps, { removeAlert })(Popup);
