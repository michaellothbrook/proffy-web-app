import express from 'express';
import cors from 'cors';
import routes from './routes';

console.log('Backend Started on port 3333!!!');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
