export default function errorMiddleware(error, req, res, next) {
  res.status(error.response?.status || 500).send({ error })
}
