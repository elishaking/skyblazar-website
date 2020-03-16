import { Errors } from "../models/error";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  title: string;
  description: string;
}

/** @param formData */
export const validateInput = (formData: ContactFormData) => {
  const errors = {} as Errors;

  if (formData.name === "") errors.name = "Your name is required";
  else if (formData.name.length < 5 || formData.name.length > 30)
    errors.name = "Your name should be between 5-30 characters";

  if (formData.email === "") errors.email = "Your email is required";
  else if (
    !new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).test(formData.email)
  )
    errors.email = "Please enter a valid email";
  else if (formData.email.length < 5 || formData.email.length > 30)
    errors.email = "Your email should be between 5-30 characters";

  if (formData.phone.length > 30)
    errors.phone = "Your phone number should be less than 30 characters";
  else if (
    formData.phone !== "" &&
    !new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/).test(
      formData.phone
    )
  )
    errors.phone = "Please enter a valid phone number";

  if (formData.title === "") errors.title = "Your project needs a title";
  else if (formData.title.length < 5 || formData.title.length > 30)
    errors.title = "Your title should be between 5-30 characters";

  if (formData.description.length > 300)
    errors.description = "Your description should be less than 300 characters";

  return {
    isValid: Object.keys(errors).length === 0,
    errors: errors
  };
};
