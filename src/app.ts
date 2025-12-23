import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './routes';
import { errorHandler } from './middleware/errorHandler';

const app: Application = express();

// Middlewares de sécurité
app.use(helmet());
app.use(cors());

// Parser JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', router);

// Route de santé pour render.com
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Route racine
app.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'Backend Express TypeScript API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      api: '/api'
    }
  });
});

// Middleware de gestion d'erreurs (doit être en dernier)
app.use(errorHandler);

export default app;
