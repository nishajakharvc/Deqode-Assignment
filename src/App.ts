import express, { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routesV1 from './Routes/v1'

const app = express()
app.use(bodyParser.json({ limit: '10mb' }))
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(express.static('public'))
app.use(
  cors({
    origin: '*',
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
)

app.use('/api/v1', routesV1)

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  return res.sendStatus(404)
})

app.use((err: SyntaxError, req: Request, res: Response) => {
  if (err instanceof SyntaxError && 'body' in err) {
    return res.sendStatus(400) // Bad request
  }
})

export default app
