import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

// middlerare
import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';

// controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentsController from './app/controllers/AppointmentsController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import AvailableController from './app/controllers/AvailableController';

const upload = multer(multerConfig);
const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware); // para todas as rotas abaixo
routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), FileController.store);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

routes.post('/appointments', AppointmentsController.store);
routes.get('/appointments', AppointmentsController.index);
routes.delete('/appointments/:id', AppointmentsController.delete);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

export default routes;
