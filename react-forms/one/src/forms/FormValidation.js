import * as Yup from 'yup';

export const FormValidation = Yup.object({
    user_name: Yup.string().min(3).required("Please enter name."),
    user_email: Yup.string().email("Please enter valid email.").required("Please enter valid email."),
    user_password: Yup.string().min(5).required("Please enter password."),
    user_cpassword: Yup.string().oneOf([Yup.ref("password")], "Password not matched.").required("Please enter confirm password.")
});