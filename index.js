const { isMaster, fork } = require('cluster')

require('dotenv').config()

const express = require('express');

function createServer() {

    const server = express()

    server.use(require('./app').default)

    const port = process.env.PORT || 3000

    server.use(express.static(__dirname));

    server.listen(port, () => {
		console.log(`listening on port ${port}`)
    })

}

if (isMaster && process.env.NODE_ENV !== 'development') {
	// Count the machine's CPUs
	const cpuCount = require('os').cpus().length

	// Create a worker for each CPU
	for (let i = 0; i < cpuCount; i += 1) {
		fork()
	}
	// Code to run if we're in a worker process
} else {
	createServer()
}
