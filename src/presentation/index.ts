import {
	Application,
	Errback,
	NextFunction,
	Request,
	Response,
	json,
} from 'express';
import { connectDB } from '../database';

import { wordRouter } from './routes';

/**
 * Apply the routes in the app
 * @param app Application Express Object
 */
export async function applyRoutes(app: Application): Promise<void> {
	// app.use('/images', await imagesRouter());
	app.use(json());

	app.get('/', (_: Request, res: Response) => {
		return res.json({
			message: `${process.env?.SERVER_NAME || 'Server Name'} Online`,
			version: `${process.env?.npm_package_version || '0.0.0'}`,
		});
	});

	app.use('/words', await wordRouter());

	app.use((req: Request, res: Response) => {
		return res.status(404).json({ message: 'Route not Found' });
	});

	app.use(
		async (err: Errback, _: Request, res: Response, next: NextFunction) => {
			console.error(err);

			return res.status(500).json({ message: 'Internal Server Error', err });
		}
	);

	connectDB();

	console.info('[ ROUTES ] Routes configured and ready.');
}
