import * as yup from "yup"

export const registerSchema = yup
    .object({
        username: yup.string().required("Please enter a Username").min(5, "username must be at least 5 characters"),
        email: yup.string()
            .required("please enter an email")
            .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g , 'Enter a valid email'),
        password: yup.string()
            .required("please enter a password")
            .min(6,'password must be at least 6 characters'),
    })
    .required()