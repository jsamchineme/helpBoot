export const TOKEN_EXPIRTY_TIME = '24h';

export const ERROR_CODES = {
  USR_07: {
    message: 'account not found',
    status: 404,
    code: 'USR_07'
  },
  USR_08: {
    message: 'account already exists',
    status: 409,
    code: 'USR_08'
  },
  AUTH_01: {
    message: 'invalid token',
    status: 403,
    code: 'AUTH_01'
  },
  PRJ_01: {
    message: 'project not found',
    status: 404,
    code: 'PRJ_01'
  },
  PND_01: {
    message: 'project need not found',
    status: 404,
    code: 'PND_01'
  },
  VRQ_01: {
    message: 'volunteer request need not found',
    status: 404,
    code: 'VRQ_01'
  },
}