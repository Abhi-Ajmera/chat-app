import express from 'express';
import dotenv from 'dotenv';
import path from 'node:path';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
const __dirName = path.resolve();

app.use('/api/auth', authRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirName, '../frontend', 'dist')));

  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirName, '../frontend', 'dist', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`server is litening on PORT: ${PORT}`));
