import express, { json, urlencoded } from 'express';
import cors from 'cors';
import Messages from './routes/api/Messages';

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

// Routes
app.use('/api/message', Messages);

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
