const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./routers/projectsRouter.js')
const actionsRouter = require('./routers/actionsRouter.js')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)

server.listen(4000, () => {
    console.log('Server listening on port 4000')
})