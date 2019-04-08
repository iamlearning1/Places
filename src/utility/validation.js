const validate = (value, rules, connectedValue) => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case "isEmail":
        isValid = isValid && emailValidator(value);
        break;
      case "minLength":
        isValid = isValid && minLength(value, rules[rule]);
        break;
      case "equalTo":
        isValid = isValid && equalToValidator(value, connectedValue[rule]);
        break;
      default:
        isValid = true;
    }
  }
  return isValid;
};

const emailValidator = value =>
  /[a-z0-9!#$%&'*+\/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9][a-z0-9-]*[a-z0-9]/.test(
    value
  );

const minLength = (value, minLength) => value.length >= minLength;

const equalToValidator = (value, checkValue) => value === checkValue;

export default validate;
