import express from 'express'
import Debug from 'debug'

import PingRepository from './src/repositories/PingRepository'
import PingService from './src/services/PingService'
import Ping from './src/routes/Ping'
import bodyParser = require('body-parser');

const debug = Debug('app')
const app = express()
const port = process.env.PORT || 3000


const pingRepository = PingRepository()
const pingService = PingService(pingRepository)

app.use(bodyParser.json())
app.use('/ping', Ping(pingService))

app.listen(port, () => {
    debug(`Listening on port ${port}`)
})