import { model, Schema } from 'mongoose';

const WordSchema = new Schema(
	{
		word: {
			type: String,
			required: true,
		},
		meaning: {
			type: String,
			required: false,
		},
		examples: {
			type: String,
			required: false,
		},
	},
	{ collection: 'words', timestamps: true }
);

export const Word = model('Word', WordSchema);
