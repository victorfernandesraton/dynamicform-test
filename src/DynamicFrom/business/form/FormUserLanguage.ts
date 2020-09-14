import FormStrategy, {FormObject} from './FormStrategy';

export default class FormCommunity extends FormStrategy {

    constructor(formObjext : FormObject, community?: any) {
        super(formObjext);
        this.entity= community;
    }
    
    wrap(payload: any): void {
        const {st_language} = payload;
        const sumitButton = {label: payload.field && payload.field === 'modify'? 'Salvar': 'Criar', name: 'save'};
        
        this.formReplace(this.entity);
        // parse de vários lugares diferentes
        if (payload.field === 'modify' && st_language) {
            if (st_language === 'pt-Br' || st_language === 'portugês') {
                this.formReplace({fk_country: 1})
            } else {
                this.formReplace({fk_country: 2})
            }
        }
        this.formReplace(payload);
        this.form = [...this.form, sumitButton];

    }
    validate(): boolean {
        throw new Error('Method not implemented.');
    }
}