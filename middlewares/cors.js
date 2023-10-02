import cors from 'cors'

const ACCEPTED_ORIGINS = [
  // Localhost
  'http://localhost:8080',
  'http://localhost:3000',
  'http://localhost:5500',
  'http://127.0.0.1:5500',
  // Despliegues
  'https://joseabh.github.io',
  'https://back-pzj5-dev.fl0.io'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})
