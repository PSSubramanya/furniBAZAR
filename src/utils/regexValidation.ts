import strings from '../constants/strings';

export const usernameRegex = /^[A-Za-z0-9@.]+$/;
export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

/* For now it is Indian numbers, eventually write it for global */
// export const mobileNumberRegex = /^\+91[6-9][0-9]{9}$/;

export const mobileNumberRegex = /^[6-9][0-9]{9}$/;

const validateUsername = (val: string) => {
  const regex = new RegExp(usernameRegex);
  if (regex.test(val)) {
    return '';
  } else {
    return strings?.validUsername;
  }
};

const passwordValidation = (val: string) => {
  const regex = new RegExp(passwordRegex);
  if (regex.test(val)) {
    return '';
  } else if (val?.length === 0) {
    return strings?.enterPassword;
  } else if (!regex.test(val)) {
    return strings?.validPassword;
  }
};

const mobileNumberValidation = (val: string) => {
  const regex = new RegExp(mobileNumberRegex);
  if (regex.test(val)) {
    return '';
  } else if (val?.length === 0) {
    return strings?.enterMobileNumber;
  } else if (val?.length > 0 && val?.length < 10) {
    return strings?.tenDigitsErrorMessage;
  } else if (val?.length > 10) {
    return strings?.greaterThanTenDigitsError;
  } else {
    return strings?.validMobileNumber;
  }
};

export {validateUsername, passwordValidation, mobileNumberValidation};
