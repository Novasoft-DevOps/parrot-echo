const server = require('./server')
const api = require('./api')
const boot = require('./server/start')
require('dotenv').config()

const withAPI = api(server)
boot(withAPI)
