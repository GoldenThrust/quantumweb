import { body, validationResult } from "express-validator";

export function validate(validations) {
  return async (req, res, next) => {  
    let render = '';
    for (const [index, validation] of Object.entries(validations)) {
      if (Number(index) === 0) {
        render = validation;
        continue;
      }

      const result = await validation.run(req);
      if (!result.isEmpty()) {
        break;
      }
    }

    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return next();
    }

    return res.status(422).render(render, { errors: errors.array()[0] });
  };
}

export const loginValidator = [
  'admin/login',
  body("email").trim().isEmail().withMessage("Email is required"),
  body("password")
    .trim()
    .isLength({ min: 5 })
    .withMessage("Password should contain at least 6 characters"),
];

export const emailValidator = [
  'index',
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").trim().isEmail().withMessage("Email is required"),
  body("message").trim().notEmpty().withMessage("Message is required"),
];
