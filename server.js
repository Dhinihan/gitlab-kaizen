'use strict'

import express from 'express'
import ping from './app/ping.js'
import gitlab from './app/gitlab/module.js'
import middlewares from './app/middleware/module.js'
import { config } from 'dotenv'
config()

const PORT = 8080
const HOST = '0.0.0.0'

const app = express()
app.use('/ping', ping)
app.use('/gitlab/check', gitlab.check)
app.use(middlewares.error)
app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
