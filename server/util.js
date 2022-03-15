import pino from "pino";

const logger = pino({
    enabled: !(!!process.env.LOG_DISABLE),
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    }
});

export default logger;