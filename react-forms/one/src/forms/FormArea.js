import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { useFormik, Formik, Form } from "formik";
import * as Yup from 'yup';

const initialValues = {
  name:"",
  email:"",
  password:"",
  cpassword:""
}

const FormValidation = Yup.object({
  user_name: Yup.string().min(3).required("Please enter name."),
  user_email: Yup.string().email("Please enter valid email.").required("Please enter valid email."),
  user_password: Yup.string().min(5).required("Please enter password."),
  user_cpassword: Yup.string().oneOf([Yup.ref("password")], "Password not matched.").required("Please enter confirm password.")
});

function FormArea() {
  const {values, handleBlur, handleChange, handleSubmit, handleReset, errors} = useFormik({
    initialValues: initialValues,
    validationSchema:FormValidation,
    onSubmit:(values) => {
      console.log(values);
    }
  });

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_naawjgt', 'template_a4uikdp', form.current, 'pMOGs9W_LfCQfWE8N')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  
  return (
    <>
      <Formik initialValues={initialValues} validationSchema={FormValidation}>
        <Form ref={form} onSubmit={(f) => {sendEmail(f); handleSubmit(f); handleReset(f)}}>
          <label htmlFor="name">Name</label><br />
          <input type="text" name="user_name" value={values.user_name} onBlur={handleBlur} onChange={handleChange} /><br />
          {errors.user_name && <small>{errors.user_name}</small>}<br />

          <label htmlFor="email">Email</label><br />
          <input type="email" name="user_email" value={values.user_email} onBlur={handleBlur} onChange={handleChange} /><br />
          {errors.user_email && <small>{errors.user_email}</small>}<br />

          <label htmlFor="password">Password</label><br />
          <input type="password" name="user_password" value={values.user_password} onBlur={handleBlur} onChange={handleChange} /><br />
          {errors.user_password && <small>{errors.user_password}</small>}<br />

          <label htmlFor="cpassword">Confirm Password</label><br />
          <input type="password" name="user_cpassword" value={values.user_cpassword} onBlur={handleBlur} onChange={handleChange} /><br />
          {errors.user_cpassword && <small>{errors.user_cpassword}</small>}<br />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default FormArea;
