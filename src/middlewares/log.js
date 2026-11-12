import logger from 'lunkynono-logger'

export function log(req, res, next) {
  const start = Date.now()

  res.on('finish', () => {
    const time = Date.now() - start
    const date = new Date().toLocaleString('es-ES')
    const size = res.getHeader('content-length') ?? '-'

    logger.info(
      `${req.method} ${req.originalUrl} ${res.statusCode} ${size} - ${time} ms - ${date}`,
    )
  })

  next()
}
