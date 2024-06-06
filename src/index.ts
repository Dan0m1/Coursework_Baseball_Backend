require('dotenv').config({path: '/var/www/baseballbackend/_work/.env'});
var compression = require('compression')
import express from 'express';
import scheduleRoutes from './api/v2/routes/ScheduleRoutes'
import userRoutes from './api/v2/routes/UserRoutes'
import ticketRoutes from "./api/v2/routes/TicketRoutes";
import gameRoutes from "./api/v2/routes/GameRoutes";

const app = express();
app.use(compression());
app.use(express.json());
app.use('/api/v1/schedule', scheduleRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/ticket', ticketRoutes);
app.use('/api/v1/game', gameRoutes);

app.listen(3000, () =>{console.log("Server ready at localhost:3000")});
