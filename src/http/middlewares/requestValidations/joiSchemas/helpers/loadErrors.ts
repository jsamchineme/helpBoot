import { ModelName, ValidationErrorType, ErrorTypeCode, ErrorTypeCodeMap } from 'src/types';

const modelCodePrefixes = {
  [ModelName.USER]: 'USR',
  [ModelName.PROJECT]: 'PRJ',
  [ModelName.PROJECT_NEED]: 'PND',
};

const ErrorTypeCodes: ErrorTypeCodeMap = {
  [ValidationErrorType.EMPTY]: ErrorTypeCode._01,
  [ValidationErrorType.REQUIRED]: ErrorTypeCode._02,
  [ValidationErrorType.EMAIL]: ErrorTypeCode._03,
  [ValidationErrorType.MAX]: ErrorTypeCode._04,
  [ValidationErrorType.MIN]: ErrorTypeCode._05,
  [ValidationErrorType.UNKNOWN]: ErrorTypeCode._06,
  [ValidationErrorType.NUMBER]: ErrorTypeCode._46,
  [ValidationErrorType.ENUM]: ErrorTypeCode._47,
}

const loadErrors = (modelName: ModelName, errors) => {
  const { code: type, local } : { code: ValidationErrorType, local: any} = errors[0];
  const { key: field } = local;

  let message;
  const status = 422;
  const errorCode = `${modelCodePrefixes[modelName]}_${ErrorTypeCodes[type]}`;

  switch (type) {
    case ValidationErrorType.REQUIRED:
      message = `The ${field} field is required`;
      break;
    case ValidationErrorType.ENUM: // ENUM validation
      message = `The ${field} field has an unaccepted value`;
      break;
    case ValidationErrorType.EMAIL:
      message = `The ${field} field is invalid`;
      break;
    case ValidationErrorType.EMPTY:
      message = `The ${field} field is empty`;
      break;
    case ValidationErrorType.MIN:
      message = `The ${field} field is less than ${local.limit} in character length`;
      break;
    case ValidationErrorType.UNKNOWN:
      message = `The ${field} field is not allowed`;
      break;
    case ValidationErrorType.MAX:
      message = `The ${field} field is longer than ${local.limit} in character length`;
    case ValidationErrorType.NUMBER:
      message = `The ${field} field is not a number`;
      break;
    default:
      message = 'failed validation';
  }

  errors[0].message = `${errorCode}|${status}|${message}`;

  return errors;
};
export default loadErrors;
