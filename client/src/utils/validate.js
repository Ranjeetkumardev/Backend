const checkValiDate = (name, email, mobile, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isNameValid = /^[a-zA-Z\s]+$/.test(name);
  const isMobileValid = /^[0-9]{10}$/.test(mobile);

  if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isMobileValid) return "Please dial 10 digits Mobile no";
  if (!isPasswordValid) return "Please write at least 6-digits password use special charet and No";

  return null;
};

export default checkValiDate;
