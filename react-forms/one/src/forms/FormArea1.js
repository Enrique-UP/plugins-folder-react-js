import * as Yup from 'yup';

import { useFormik, Formik, Form, Field } from "formik";

const FormValidation = Yup.object({
  user_name: Yup.string().min(3).required("Please enter name."),
  user_email: Yup.string().email("Please enter valid email.").required("Please enter valid email."),
  user_password: Yup.string().min(5).required("Please enter password."),
  user_cpassword: Yup.string().oneOf([Yup.ref("password")], "Password not matched.").required("Please enter confirm password.")
});

const initialValues = {
  name:"",
  email:"",
  password:"",
  cpassword:""
}

function FormArea1() {
  return (
    <>
      <Formik initialValues={initialValues} validationSchema={FormValidation}>
        {({errors}) => (
          <Form>
            <label htmlFor="name">Name</label><br />
            <Field type="text" name="user_name"></Field><br />
            {errors.user_name && <small>{errors.user_name}</small>}<br />

            <label htmlFor="email">Email</label><br />
            <Field type="email" name="user_email"></Field><br />
            {errors.user_email && <small>{errors.user_email}</small>}<br />

            <label htmlFor="password">Password</label><br />
            <Field type="password" name="user_password"></Field><br />
            {errors.user_password && <small>{errors.user_password}</small>}<br />

            <label htmlFor="cpassword">Confirm Password</label><br />
            <Field type="password" name="user_cpassword"></Field><br />
            {errors.user_cpassword && <small>{errors.user_cpassword}</small>}<br />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormArea1;
