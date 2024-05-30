const { createLogger, transports, format } = require('winston');

const logger = createLogger({
    format: format.combine(format.timestamp(),
        format.simple(),
        format.printf(info => `[${info.timestamp}] ${info.level} ${info.message}`)
    ),
    transports: [
        new transports.File({
            filename: `${__dirname}/../logs/log-api.log`,
            maxsize: 5120000         
        }),
        new transports.Console({
            level: 'debug'
        })
    ]
})

module.exports = logger;