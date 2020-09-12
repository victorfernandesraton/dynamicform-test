import FormStrategy, {FormObject} from './FormStrategy';

export default class FormUser extends FormStrategy {

    constructor(formObjext : FormObject, user?: any) {
        super(formObjext);
        this.entity= user;
    }
    
    wrap(payload: any): void {
        const sumitButton = {label: payload.field && payload.field === 'edit'? 'Salvar': 'Criar', name: 'save'};
        this.preWrap(this.entity);
        this.preWrap(payload);
        this.form = [...this.form, sumitButton];

    }
    validate(): boolean {
        throw new Error('Method not implemented.');
    }
}