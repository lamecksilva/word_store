import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
	mt3: {
		marginTop: theme.spacing(3),
	},
	dialogContent: {
		padding: theme.spacing(2),
		margin: theme.spacing(1),
	},
	buttonConfirm: {
		marginTop: theme.spacing(3),
		// backgroundColor: theme.palette.secondary.main,
	},
}));
