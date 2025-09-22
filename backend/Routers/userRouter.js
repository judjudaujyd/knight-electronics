import express from "express";
import { body, validationResult } from "express-validator";
import { setUser } from "../Controllers/userController.js";

const userRouter = express.Router();

userRouter.post(
  "/",
  [
    body("firstName", "First Name is required").notEmpty(),
    body("lastName", "Last Name is required").notEmpty(),
    body("email", "Email is required")
      .notEmpty()
      .isEmail()
      .withMessage("Invalid email format"),
    body("phoneNumber", "Phone Number is required").notEmpty(),
    body("password", "Password is required").notEmpty(),
    body("password", "Password must be at least 8 characters").isLength({ min: 8 }),
  ],
  (req, res, next) => {
    const errors = validationResult(req); 

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
  setUser
);

export default userRouter;
