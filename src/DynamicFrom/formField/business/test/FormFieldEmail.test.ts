import { textSpanEnd } from 'typescript';
import FormFieldEmail from '../FormFieldEmail';

describe('FormFieldEmail', () => {
    test('valid mail address', () => {
        const formItem = {label: 'Email', type: 'single', field: 'email', initialValue: 'teste@teste.com'}
        const formFieldEmail = new FormFieldEmail(formItem);
        expect(formFieldEmail.validate()).toEqual(true);
    })
    
    test('invalid mail address', () => {
        const formItem = {label: 'Email', type: 'single', field: 'email', initialValue: 'testeteste.com'}
        const formFieldEmail = new FormFieldEmail(formItem);
        expect(formFieldEmail.validate()).toEqual(true);
    })
})