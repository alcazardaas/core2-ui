export const validate = inputs => {
  const errors = {};
  if (!inputs.username) {
    errors.username = 'Enter your Username';
  } /*else if (inputs.username !== 'rajat') {
    errors.username = 'Username is incorrect';
  }*/
  if (!inputs.password) {
    errors.password = 'Enter your Password';
  }
  return errors;
};
