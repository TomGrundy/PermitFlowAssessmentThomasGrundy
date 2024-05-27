const cors = require('cors');
import express from 'express';
import { router } from './Routes/router';

const app = express();


// Middlewares
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use('/', router);


export default app;
