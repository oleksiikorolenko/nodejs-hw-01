import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts), { encoding: 'utf-8' });
    } catch (error) {
        console.error("Write file error", error);
    }
};
