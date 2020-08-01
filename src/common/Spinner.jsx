import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		'& > * + *': {
			marginLeft: theme.spacing(2),
		},
	},
}));

const Spinner = () => {
	const classes = useStyles();
	return (
		<div>
			<div className={classes.root}>
				<CircularProgress color="secondary" / >
			</div>
		</div>
	)
}

export default Spinner
