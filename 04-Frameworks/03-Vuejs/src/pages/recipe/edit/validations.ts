import { createFormValidation, Validators, ValidationSchema } from "@lemoncode/fonk";
import { hasItems } from "../../../common/validations/hasItems";

const validationSchema: ValidationSchema = {
  field: {
    name: [{ validator: Validators.required, message: "Please, enter a name for the recipe"}],
    ingredients: [hasItems],
    imageUrl: [{ validator: Validators.pattern, message: "Please, enter a valid url", customArgs: {pattern: /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/}}],
    description: [{ validator: Validators.required, message: "Please, enter a description for the recipe"}]
  },
};

export const validations = createFormValidation(validationSchema);
