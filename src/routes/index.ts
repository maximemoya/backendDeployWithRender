import { Router, Request, Response } from 'express';

const router = Router();

// Exemple de route GET
router.get('/', (_req: Request, res: Response) => {
  res.json({
    message: 'API Routes',
    availableRoutes: [
      'GET /api/',
      'GET /api/example'
    ]
  });
});

// Exemple de route
router.get('/example', (_req: Request, res: Response) => {
  res.json({
    message: 'This is an example route',
    data: {
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    }
  });
});

// Exemple de route POST
router.post('/example', (req: Request, res: Response) => {
  const { data } = req.body;
  res.json({
    message: 'Data received',
    received: data,
    timestamp: new Date().toISOString()
  });
});

export default router;
