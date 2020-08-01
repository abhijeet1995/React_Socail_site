import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';

export default function Snack({ message, type, open, close, key }) {
	const color = {
		success: "#03C58D",
		error: "#FF5847"
	}

	const useStyles = makeStyles(theme => ({
		root: {
			'& .MuiSnackbarContent-root': {
				backgroundColor: color[type]
			}
		},
	}));


	const classes = useStyles();

	return (
		<div>
			<Snackbar
				className={classes.root}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				key={key}
				open={open}
				onClose={close}
				message={message}
			/>
		</div>
	);
}