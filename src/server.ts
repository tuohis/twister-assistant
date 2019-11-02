import express from 'express';
import { getRandomMove } from './twisterWheel';

const port = process.env.PORT || 3000;
const app = express();

app.get('/spin', (req: any, res: any) => res.send(getRandomMove()));

app.listen(port);

