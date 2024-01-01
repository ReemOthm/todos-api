import { IRegisterForm } from "../interfaces";

export const RegisterForm: IRegisterForm[] = [
    {
        type: 'text',
        placeholder: "Enter a Username",
        name: 'username',
        validation : {
            required: true,
            minLingth: 5
        }
    },
    {
        type: 'email',
        placeholder: "Enter an Email",
        name: 'email',
        validation : {
            required: true,
            pattern: /^[^@ ]+@[^@ ]+\.[@ .]{2,}$/,
        }
    },
    {
        type: 'password',
        placeholder: "Enter a password",
        name: 'password',
        validation : {
            required: true,
            minLingth: 6,
        }
    },
    
]