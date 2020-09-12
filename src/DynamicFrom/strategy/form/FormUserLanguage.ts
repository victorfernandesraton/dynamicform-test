import FormStrategy, {FormObject} from './FormStrategy';

export default class FormCommunity extends FormStrategy {

    constructor(formObjext : FormObject, community?: any) {
        super(formObjext);
        this.entity= community;
    }
    
    wrap(payload: any, field: string): void {
        const {st_language} = payload;
        const sumitButton = {label: field === 'modify'? 'Salvar': 'Criar', name: 'save'};
        
        this.preWrap(this.entity);
        // parse de vários lugares diferentes
        if (field === 'modify' && st_language) {
            if (st_language === 'pt-Br' || st_language === 'portugês') {
                this.preWrap({fk_country: 1})
            } else {
                this.preWrap({fk_country: 2})
            }
        }
        this.preWrap(payload);
        this.form = [...this.form, sumitButton];

    }
    validate(): boolean {
        throw new Error('Method not implemented.');
    }
}