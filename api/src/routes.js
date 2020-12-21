import { Router } from 'express';
import OrdersController from './controllers/OrdersController';

const routes = new Router();

routes.get('/orders', OrdersController.index)

export default routes;
