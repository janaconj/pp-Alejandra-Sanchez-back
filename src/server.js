import express from "express"

const app = express();

//routes
import IndexRoutes from './routes/index.routes';
import TasksRoutes from './routes/tasks.routes';

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//routes
app.use(IndexRoutes);
app.use('/users', TasksRoutes);

export default app;