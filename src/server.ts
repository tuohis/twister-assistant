import express from 'express';
import { getRandomMove } from './twisterWheel';
import { dialogFlowResponse } from './dialogFlow';

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req: any, res: any) => res.send(''));
app.get('/spin/text', (req: any, res: any) => res.send(getRandomMove()));
app.post('/spin/dialogFlow', (req: any, res: any) => res.json(dialogFlowResponse(getRandomMove())));

app.listen(port);

