import { Router } from 'express';
import {
    deleteDocument,
    getDocument,
    listDocuments,
    uploadDocument,
} from '../controllers/documents.js';

const documentsRouter = Router();

documentsRouter.post('/', uploadDocument);
documentsRouter.get('/', listDocuments);
documentsRouter.get('/:id', getDocument);
documentsRouter.delete('/:id', deleteDocument);

export { documentsRouter };
