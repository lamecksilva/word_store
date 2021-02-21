import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import Axios from 'axios';

import { AddWordDialog, BaseContainer } from './components';
import { Add } from '@material-ui/icons';

import useStyles from './styles';

function App() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [words, setWords] = useState([]);

	useEffect(() => {
		async function getData() {
			const { data } = await Axios.get('/words/all');

			setWords(data.payload);
		}

		getData();
	}, []);

	function handleClose() {
		setOpen(!open);

		async function getData() {
			const { data } = await Axios.get('/words/all');

			console.log(data.payload);

			setWords(data.payload);
		}

		getData();
	}

	return (
		<BaseContainer>
			<Typography variant="h5" align="center">
				Word Store
			</Typography>

			<Button startIcon={<Add />} onClick={handleClose}>
				Add New Word
			</Button>

			<div className={classes.content}>
				{words?.map((item: any) => (
					<div key={item._id}>
						<Typography variant="h5">
							{item.word} - {item.meaning}
						</Typography>
					</div>
				))}
			</div>

			<AddWordDialog handleClose={handleClose} isOpen={open} />
		</BaseContainer>
	);
}

export default App;
