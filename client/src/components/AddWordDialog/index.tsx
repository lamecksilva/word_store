import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import Axios from 'axios';

import useStyles from './styles';

export function AddWordDialog({
	handleClose,
	isOpen,
}: {
	isOpen: boolean;
	handleClose: () => void;
}) {
	const classes = useStyles();
	const [state, setState] = useState({ word: '', meaning: '', examples: '' });
	const [errors, setErrors] = useState({ word: false, meaning: false });

	async function onConfirm() {
		setErrors({
			meaning: state.meaning.length === 0,
			word: state.word.length === 0,
		});

		if (state.meaning.length !== 0 && state.word.length !== 0) {
			await Axios.post('/words', state)
				.then((response) => {
					console.log(response);

					handleClose();
				})
				.catch((err) => console.log(err));
		}
	}

	return (
		<Dialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth>
			<DialogTitle>Add Word</DialogTitle>

			<DialogContent>
				<TextField
					label="Word*"
					variant="outlined"
					fullWidth
					className={classes.mt3}
					error={errors.word}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setState({ ...state, word: event.target.value })
					}
				/>

				<TextField
					label="Meaning* (Portuguese)"
					variant="outlined"
					fullWidth
					className={classes.mt3}
					error={errors.meaning}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setState({ ...state, meaning: event.target.value })
					}
				/>

				<TextField
					label="Examples"
					variant="outlined"
					multiline
					fullWidth
					className={classes.mt3}
					rows={8}
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setState({ ...state, examples: event.target.value })
					}
				/>

				<Button
					color="primary"
					variant="contained"
					fullWidth
					size="large"
					className={classes.buttonConfirm}
					onClick={onConfirm}
				>
					Confirm
				</Button>
			</DialogContent>
		</Dialog>
	);
}
