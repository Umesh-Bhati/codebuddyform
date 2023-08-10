export const isValidEmail = (email: string) => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
  let error = '';
  if (email.length < 1) {
    error = 'Email is required.';
  } else if (!emailRegex.test(email)) {
    error = 'Must be a valid email ID';
  }
  return error;
};

export const isValidPassword = (password: string) => {
  let error = '';
  const regex =
    /^(?=(.*[A-Z]){2})(?=(.*[a-z]){2})(?=(.*\d){2})(?=(.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=|]){2}).{8,}$/;

  if (password.length < 1) {
    error = 'Password is required.';
  } else if (!regex.test(password)) {
    error =
      'Must contain minimum 2 capital letters, 2 small letter, 2 numbers and 2 special characters';
  }

  return error;
};

export const isValidName = (name: string, isFirstName = true) => {
  let error = '';
  const regex = /^(?=\s*\S)([A-Za-z\s]{2,50})$/;
  if (isFirstName && name.length < 1) {
    error = 'First Name is required.';
  } else if (name.length > 0 && !regex.test(name)) {
    error = 'first name must be in alphabet';
  }
  return error;
};

export const isValidAddress = (address: string) => {
  let error = '';
  if (address.length < 1) {
    error = 'address is required.';
  } else if (address.length < 10) {
    error = 'Minimum charactor should be 10';
  }

  return error;
};
