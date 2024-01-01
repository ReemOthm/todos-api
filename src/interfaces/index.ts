export type inputs = 'username' | 'email' | 'password';

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
