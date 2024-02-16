export const REGEXP = {
  EMAIL:
    /[a-zA-Z\d!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z\d!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z\d](?:[a-z\d-]*[a-z\d])?\.)+[a-z\d](?:[a-z\d-]*[a-z\d])?/,
};

export const VALIDATION_ERROR_MESSAGES = {
  REQUIRED: "This field is required.",
  INVALID_EMAIL: "Invalid email.",
};

export const VALIDATION_RULES = {
  required: { value: true, message: VALIDATION_ERROR_MESSAGES.REQUIRED },
  emailPattern: { value: REGEXP.EMAIL, message: VALIDATION_ERROR_MESSAGES.INVALID_EMAIL },
};
