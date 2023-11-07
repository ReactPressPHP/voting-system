import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import discordCheckerRouter from './src/Routes/discordCheckerRouter.js';

dotenv.config({ path: './.env' });

const app = express();
app.use(express.json());
app.use(cors());
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};

app.use('/api', discordCheckerRouter);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
})


