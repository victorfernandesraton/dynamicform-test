import FormStrategy, {FormObject} from '../FormStrategy';

export default class FormUser extends FormStrategy {

    constructor(formObjext : FormObject, user?: any) {
        super(formObjext);
        this.entity= user;
    }
    
    wrap(payload?: any): void {
        this.formReplace(this.entity);
        if (payload) {
            this.formReplace(payload);
        }
    }
}