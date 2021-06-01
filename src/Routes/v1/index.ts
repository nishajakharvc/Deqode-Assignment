import express from 'express'
import ImageRouter from './ImageRouter'

const router = express.Router()

router.use('/image', ImageRouter)

export default router
