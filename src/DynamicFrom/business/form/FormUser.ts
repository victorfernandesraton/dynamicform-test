import FormStrategy, {FormObject} from './FormStrategy';

export default class FormUser extends FormStrategy {

    constructor(formObjext : FormObject, user?: any) {
        super(formObjext);
        this.entity= user;
    }
    
    wrap(payload?: any): void {
        const sumitButton = {label: 'Salvar', name: 'save', type:'submit'};
        this.preWrap(this.entity);
        if (payload) {
            this.preWrap(payload, ['gender']);
            if (payload.field == 'create') {
                sumitButton.label = 'Criar'
            }
        }
        this.form = [...this.form, sumitButton];

    }
    validate(): boolean {
        throw new Error('Method not implemented.');
    }
}