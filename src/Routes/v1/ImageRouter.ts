import { Request, Response } from 'express'
import express from 'express'

import { ERROR_MSG } from '../../core/Message'
import { upload } from '../../core/Upload'
import path = require('path')

const router = express.Router()

router.get('/:filename', async (req: Request, res: Response) => {
  try {
    res.download(
      path.join(
        __dirname,
        '../../../',
        '/public/Documents',
        req.params.filename
      ),
      (err) => {
        if (err) res.status(500).send(ERROR_MSG.CANT_DOWNLOAD)
      }
    )
  } catch (error) {
    res.status(500).json(error.message)
  }
})

router.post('/', upload.single('pic'), async (req: any, res: Response) => {
  try {
    if (!req.file) return ERROR_MSG.NO_FILE_UPLOAD
    res.status(200).json({
      message: 'File Uploaded Successfully',
      filename: req.file.filename,
    })
  } catch (error) {
    res.status(500).json(error.message)
  }
})

export default router
