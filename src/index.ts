import express, { Application } from 'express';
require('dotenv').config();

import { applyRoutes } from './presentation';

export async function startServer(): Promise<void> {
	const SERVER_PORT: string | number = process.env.SERVER_PORT || 9000;
	const SERVER_NAME: string | number = process.env.SERVER_NAME || 'Server';

	console.info(`[ STATUS ] Starting ${SERVER_NAME}...`);
	const app: Application = express();

	await applyRoutes(app);

	app.listen(SERVER_PORT, () => {
		console.info(
			`[ STATUS ] 🚀 ${SERVER_NAME} running on port: ${SERVER_PORT}`
		);
		console.info(
			'-----------------------------------------------------------------------'
		);
	});
}

startServer();
