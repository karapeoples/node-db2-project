const server = require('./server.js')

const port = process.env.PORT || 4444
server.listen(port, () => console.log(`\n*^^* ~~API IS LIVE ON PORT ${port}~~ *^^*\n`))
