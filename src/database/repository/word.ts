import { Word } from '../models/Word';

/**
 * Save new Word to the database
 *
 * @param data word data to be saved
 */
export async function saveNewWord(data: any) {
	return await Word.create(data);
}

/**
 * Update the word
 *
 * @param id id of the word
 * @param data data to be updated
 */
export async function updateWord(id: string, data: any) {
	return await Word.findOneAndUpdate({ _id: id }, data, { new: true }).lean();
}

/**
 * Find and remove the word
 *
 * @param id id of the word
 */
export async function deleteWord(id: string) {
	return await Word.findOneAndRemove({ _id: id });
}

/**
 * Find and return all Words
 */
export async function findAllWords() {
	return await Word.find({}).sort({ updatedAt: 1 }).lean();
}
