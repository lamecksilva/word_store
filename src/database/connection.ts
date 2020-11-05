import { connect, connection } from 'mongoose';

const { MONGODB_URI, MONGODB_NAME } = process.env;

export async function connectDB(): Promise<void> {
	try {
		await connect(MONGODB_URI || 'mongodb://127.0.0.1:27017/word_store', {
			dbName: MONGODB_NAME || 'word_store',
			connectTimeoutMS: 10000,
			useUnifiedTopology: true,
			serverSelectionTimeoutMS: 5000,
			useNewUrlParser: true,
			keepAlive: true,
			poolSize: 10,
			useFindAndModify: false,
		});

		// console.info(`🍃 MongoDB Connected.✅`)
	} catch (err) {
		console.error('[ DB ] 🍃 MongoDB Connection ERROR ❌');
		console.error(err);
	}
}

connection.on('connected', () => {
	console.info(`[ DB ] 🍃 MongoDB Connected.✅`);
});

connection.on('connecting', () => {
	console.info('[ DB ] 🍃 Connecting to MongoDB...🔌');
});
