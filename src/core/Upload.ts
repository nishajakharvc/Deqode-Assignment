import multer from 'multer'
import path = require('path')

const fileFilter = (req: any, file: any, cb: any) => {
  if (file.mimetype === 'application/pdf') cb(null, true)
  else return cb(new Error('Only .pdf format allowed!'))
}
const storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, path.join(__dirname, '../../', '/public/Documents'))
  },
  filename: function (req: any, file: any, cb: any) {
    cb(null, 'File-' + Date.now())
  },
})
export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
})
