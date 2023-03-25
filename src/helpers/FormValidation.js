function FormValidation(data) {
    let error = {};
    const nickNameRegex =/^[a-zA-Z0-9_]*$/;
    if (data.name === undefined || data.name === "") {
      error.name = "Name field required";
    }
    if (
      !nickNameRegex.test(data.name) &&
      data.name !== undefined &&
      data.name !== ""
    ) {
      error.name = "Only letters, numbers and underscores are allowed";
    }
    if (
      data.amount === undefined || data.amount < 1
    ) {
      error.amount = " Min amount is $1";
    }

    if (Object.keys(error).length === 0) {
      error.status = false;
    }
    return error;
  }
  
  export default FormValidation;
  