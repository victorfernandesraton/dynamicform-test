import FormStrategy, {FormObject} from './FormStrategy';

export default class FormUser extends FormStrategy {

    constructor(formObjext : FormObject, user?: any) {
        super(formObjext);
        this.entity= user;
    }
    
    wrap(payload?: any): void {
        const sumitButton = {label: 'Salvar', name: 'save', type:'submit'};
        this.formReplace(this.entity);
        if (payload) {
            // exclusão de gênero para garantir que o gênero seja do usuário
            this.formReplace(payload, ['gender']);
            if (payload.field === 'create') {
                sumitButton.label = 'Criar'
            }
        }
        this.form = [...this.form, sumitButton];
    }
    validate(): boolean {
        throw new Error('Method not implemented.');
    }
}