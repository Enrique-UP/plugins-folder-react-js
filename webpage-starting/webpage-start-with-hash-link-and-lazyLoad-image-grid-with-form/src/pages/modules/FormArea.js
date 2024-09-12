import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from "formik";
import * as Yup from 'yup';

const FormValidation = Yup.object({
  user_name: Yup.string().min(3, "Name must be at least 3 characters long.").required("Please enter your name."),
  user_email: Yup.string()
    .email("Please enter a valid email address.")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address."
    )
    .required("Please enter your email."),
  country_code: Yup.string()
    .matches(/^\+\d{1,3}$/, "Please enter a valid country code (e.g., +1, +44 etc.).")
    .required("Please enter your country code."),
  user_phone: Yup.string()
    .matches(/^[0-9]{3,20}$/, "Please enter a valid phone number.")
    .required("Please enter your phone number."),
  user_message: Yup.string().min(10, "Message must be at least 10 characters long."),
});

const initialValues = {
  user_name: "",
  user_email: "",
  country_code: "",
  user_phone: "",
  user_message: "",
}

function FormReact() {
  const form = useRef();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: FormValidation,
    onSubmit: (values, { resetForm }) => {
      emailjs.sendForm('service_naawjgt', 'template_a4uikdp', form.current, 'pMOGs9W_LfCQfWE8N')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      resetForm();
    }
  });

  return (
    <>
      <form ref={form} onSubmit={formik.handleSubmit}>
        <label htmlFor="user_name">Name</label><br />
        <input 
          type="text" 
          name="user_name" 
          value={formik.values.user_name} 
          onBlur={formik.handleBlur} 
          onChange={formik.handleChange} 
          title="Name must be at least 3 characters."
        /><br />
        {formik.errors.user_name && formik.touched.user_name && <small>{formik.errors.user_name}</small>}<br />

        <label htmlFor="user_email">Email</label><br />
        <input 
          type="email" 
          name="user_email" 
          value={formik.values.user_email} 
          onBlur={formik.handleBlur} 
          onChange={formik.handleChange} 
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" 
          title="Please enter a valid email address." 
        /><br />
        {formik.errors.user_email && formik.touched.user_email && <small>{formik.errors.user_email}</small>}<br />

        <label htmlFor="country_code">Country Dialing Code</label><br />
        <input 
          type="text" 
          name="country_code" 
          value={formik.values.country_code} 
          onBlur={formik.handleBlur} 
          onChange={formik.handleChange} 
          pattern="^\+\d{1,3}$" 
          title="Please enter a valid country code (e.g., +1, +44 etc.)." 
        /><br />
        {formik.errors.country_code && formik.touched.country_code && <small>{formik.errors.country_code}</small>}<br />
        
        <label htmlFor="user_phone">Phone Number</label><br />
        <input 
          type="text" 
          name="user_phone" 
          value={formik.values.user_phone} 
          onBlur={formik.handleBlur} 
          onChange={formik.handleChange} 
          pattern="[0-9]{3,20}" 
          title="Please enter a valid phone number with 3 to 20 digits." 
        /><br />
        {formik.errors.user_phone && formik.touched.user_phone && <small>{formik.errors.user_phone}</small>}<br />

        <label htmlFor="user_message">Message</label><br />
        <textarea 
          name="user_message" 
          value={formik.values.user_message} 
          onBlur={formik.handleBlur} 
          onChange={formik.handleChange} 
        /><br />
        {formik.errors.user_message && formik.touched.user_message && <small>{formik.errors.user_message}</small>}<br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormReact;
