const { name, version, description } = require('../../package.json')

const ping = async (_req, res) => {
  res.status(200).json({
    ok: true,
    message: {
      en: 'Online',
      es: 'En Linea',
      pt: 'Está vivo',
      info: 'Hello World from DEV Meet'
    },
    name,
    description,
    version,
    uptime: process.uptime(),
    ping: 'PONG!'
  })
}

module.exports = ping
