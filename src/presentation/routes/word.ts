import { Router } from 'express';

import { wordController } from '../controllers';

const router = Router();

export async function wordRouter() {
	router.get('/all', wordController.findAllWords);

	router.post('/', wordController.saveNewWord);

	router.put('/:id', wordController.updateWord);

	router.delete('/:id', wordController.deleteWord);

	return router;
}
