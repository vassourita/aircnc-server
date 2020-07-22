import { diskStorage } from 'multer'
import { extname } from 'path'
import { randomBytes } from 'crypto'

export const uploadConfig = {
  dir: `${__dirname}/../../tmp/uploads`,
  storage: diskStorage({
    destination: `${__dirname}/../../tmp/uploads`,
    filename: (req, file, cb) => {
      const randomName = randomBytes(8).toString('hex')
      return cb(null, `${randomName}${extname(file.originalname)}`)
    }
  })
}
