export type inputs = 'username' | 'email' | 'password';

export interface IFormInput {
    username: string,
    email: string,
    password: string
}

export interface IRegisterForm {
    type: string,
    placeholder: string,
    name: inputs,
    validation: {
        required?: boolean,
        minLingth?: number,
        pattern?: RegExp
    }
} 

export interface IErrorResponse {
    error : {
        details? :{
            errors?:{
                message: string;
            }[];
        };
        message?: string;
    }
}