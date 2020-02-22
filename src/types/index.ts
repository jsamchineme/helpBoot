export enum EnvironmentName {
  DEVELOPMENT = 'development',
  TEST = 'test',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

export interface ErrorResponse {
  status: number;
  stack?: string;
  message: string;
}

export enum ModelName {
  USER = 'user',
  PROJECT = 'project',
  PROJECT_NEED = 'projectNeed',
}

export enum ValidationErrorType {
  REQUIRED = 'any.required',
  UNKNOWN = 'any.unknown',
  EMPTY = 'string.empty',
  MAX = 'string.max',
  MIN = 'string.min',
  EMAIL = 'string.email',
  NUMBER = 'number.base',
  ENUM = 'any.only',
}

export enum ErrorTypeCode {
  _01 = '01',
  _02 = '02',
  _03 = '03',
  _04 = '04',
  _05 = '05',
  _06 = '06',
  _46 = '46',
  _47 = '47',
}

export interface ErrorTypeCodeMap {
  [ValidationErrorType.EMPTY]: ErrorTypeCode._01,
  [ValidationErrorType.REQUIRED]: ErrorTypeCode._02,
  [ValidationErrorType.EMAIL]: ErrorTypeCode._03,
  [ValidationErrorType.MAX]: ErrorTypeCode._04,
  [ValidationErrorType.MIN]: ErrorTypeCode._05,
  [ValidationErrorType.UNKNOWN]: ErrorTypeCode._06,
  [ValidationErrorType.NUMBER]: ErrorTypeCode._46,
  [ValidationErrorType.ENUM]: ErrorTypeCode._47,
}