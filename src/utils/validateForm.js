const validateForm = (person, setError, setAlert) => {
  let isValid = true;
  const format = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

  if (format.test(person.first_name)) {
    isValid = false;
    setError('Insert a valid first name please!');
    setAlert(true);
  }

  if (format.test(person.last_name)) {
    isValid = false;
    setError('Insert a valid last name please!');
    setAlert(true);
  }

  return isValid;
};

export default validateForm;
