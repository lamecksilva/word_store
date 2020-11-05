import { NextFunction, Request, Response } from 'express';
import {
	saveNewWord,
	updateWord,
	deleteWord,
	findAllWords,
} from '../../database';

export const wordController = {
	saveNewWord: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const newWord = await saveNewWord(req.body);

			return res.status(201).json({ success: true, payload: newWord });
		} catch (err) {
			next(err);
		}
	},
	findAllWords: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const words = await findAllWords();

			return res.status(200).json({ success: true, payload: words });
		} catch (err) {
			next(err);
		}
	},
	updateWord: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const updatedWord = await updateWord(req.params.id, req.body);

			return res.status(200).json({ success: true, payload: updatedWord });
		} catch (err) {
			next(err);
		}
	},
	deleteWord: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const deletedWord = await deleteWord(req.params.id);

			return res.status(200).json({ success: true, payload: deletedWord });
		} catch (err) {
			next(err);
		}
	},
};
