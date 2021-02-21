import React from 'react';

import { Container } from '@material-ui/core';

import useStyles from './styles';

interface BaseContainerProps {
	children: any;
}

export function BaseContainer({ children }: BaseContainerProps) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.content}>
				<div className={classes.toolbar} />

				<Container maxWidth="xl">{children}</Container>
			</div>
		</div>
	);
}
