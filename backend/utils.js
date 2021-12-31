import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      asAdmin: user.asAdmin,
    },
    process.env.JWT_SECRET || "somethingsecrethere",
    {
      expiresIn: "30d",
    }
  );
};
