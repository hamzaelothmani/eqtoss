import dbConnect from "../../lib/dbConnect";
import User from "../../model/User";
import bcrypt from "bcrypt";



const validateEmail = (email) => {
  const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regEx.test(email);
};

const validateForm = async (
  username,
  email,
  password
) => {
  if (username.length < 3) {
    return { error: "Username must have 3 or more characters" };
  }
  if (!validateEmail(email)) {
    return { error: "Email is invalid" };
  }

  await dbConnect();
  const emailUser = await User.findOne({ email: email });

  if (emailUser) {
    return { error: "Email already exists" };
  }

  if (password.length < 5) {
    return { error: "Password must have 5 or more characters" };
  }

  return null;
};

export default async function handler(
  req,
  res
) {
  // validate if it is a POST
  if (req.method !== "POST") {
    return res
      .status(200)
      .json({ error: "This API call only accepts POST methods" });
  }

  // get and validate body variables
  const { username, email, password } = req.body;

  const errorMessage = await validateForm(username, email, password);
  if (errorMessage) {
    return res.status(400).json(errorMessage);
  }

  // hash password
  // it would be better if hash the password on the client side (register)
  const hashedPassword = await bcrypt.hash(password, 12);

  // create new User on MongoDB
  const newUser = new User({
    name: username,
    email,
    hashedPassword,
  });

  newUser
    .save()
    .then(() =>
      res.status(200).json({ msg: "Successfuly created new User: " + newUser })
    )
    .catch((err) =>
      res.status(400).json({ error: "Error on '/api/register': " + err })
    );
}