export enum RES_STATUS {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
  ERROR = 409,
  EXPIRE = 410,
}

export const ERROR_MSG = {
  NO_FILE_UPLOAD: { message: 'No File choosen', status: RES_STATUS.NOT_FOUND },
  CANT_DOWNLOAD: {
    message: 'Cannot Download File',
    status: RES_STATUS.INTERNAL_ERROR,
  },
}
export const SUCCESS_MSG = {
  UPLOAD_SUCCESS: 'Image Uploaded Successfully',
}
