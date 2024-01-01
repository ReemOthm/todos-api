export type inputs = 'username' | 'email' | 'password';

export interface IFormInput {
    username: string,
    email: string,
    password: string
}

export interface ILoginInput {
    identifier: string,
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

export interface ILoginForm {
    type: string,
    placeholder: string,
    name: 'identifier' | 'password',
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