require('dotenv').config();
var compression = require('compression')
import express from 'express';
import scheduleRoutes from './api/v1/routes/ScheduleRoutes'
import userRoutes from './api/v1/routes/UserRoutes'

const app = express();
app.use(compression());
app.use(express.json());
app.use('/api/v1/schedule', scheduleRoutes);
app.use('/api/v1/user', userRoutes);

app.listen(3000, () =>{console.log("Server ready at localhost:3000")});
