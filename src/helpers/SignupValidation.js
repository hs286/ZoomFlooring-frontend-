function SignupValidation(data, phone, login) {
  let error = {};
  let emailRegex = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;
  let nameRegex = /^[A-Za-z\s]*$/;
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*?]).{8,}$/;
  if (data.email === undefined || data.email === "") {
    error.email = "Email feild required.";
  }
  if (
    !emailRegex.test(data.email) &&
    data.email !== undefined &&
    data.email !== ""
  ) {
    error.email = "Invalid email e.g:info@gmail.com.";
  }
  if ((data.name === undefined || data.name === "") && login !== true) {
    error.name = "Name feild required.";
  }
  if (
    !nameRegex.test(data.name) &&
    data.name !== undefined &&
    data.name !== "" &&
    login !== true
  ) {
    error.name = "Invalid name accepts alphabets only.";
  }
  if ((data.age === undefined || data.age === "") && login !== true) {
    error.age = "Age feild required.";
  }
  if (
    data.age < 18 &&
    data.age !== undefined &&
    data.age !== "" &&
    
    login !== true
  ) {
    error.age = "Invalid age accepts 18+ only.";
  }
  if ((phone === undefined || phone === "") && login !== true) {
    error.phone = "Phone feild required.";
  }
  if (data.password === undefined || data.password === "") {
    error.password = "Password feild required.";
  }
  if (
    !passwordRegex.test(data.password) &&
    data.password !== undefined &&
    data.password !== ""
  ) {
    error.password =
      "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.";
  }
  if (Object.keys(error).length === 0) {
    error.status = false;
  }
  return error;
}

export default SignupValidation;
