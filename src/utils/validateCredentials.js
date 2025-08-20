export default function validateCredentials(email, pass) {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isPassValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(
      pass,
    );

  if (!isEmailValid) return "Invalid Email";
  if (!isPassValid) return "Invalid Password";
  return null;
}
