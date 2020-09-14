import FormStrategy, {FormObject} from '../FormStrategy';

export default class FormUser extends FormStrategy {

    constructor(formObjext : FormObject, user?: any) {
        super(formObjext);
        this.entity= user;
    }
    
    wrap(payload?: any): void {
        const sumitButton = {label: 'Salvar', name: 'save', type:'single', field: 'submit'};
        this.formReplace(this.entity);
        if (payload) {
            this.formReplace(payload);
            if (payload.field === 'create') {
                sumitButton.label = 'Criar'
            }
        }
        this.form = [...this.form, sumitButton];
    }
}