import makeStyles from '@material-ui/core/styles/makeStyles';

export default makeStyles((theme) => ({
	root: { display: 'flex' },

	content: {
		flexGrow: 1,

		[theme.breakpoints.up('sm')]: {
			padding: theme.spacing(1),
		},
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(0.5),
		},
	},

	toolbar: theme.mixins.toolbar,
}));
