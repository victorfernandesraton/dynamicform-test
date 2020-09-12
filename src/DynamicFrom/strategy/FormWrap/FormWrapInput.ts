import FormWrapStrategy from './FormWrapStrategy';
export default class FormWrapInput extends FormWrapStrategy {
    
    constructor(formItem: any) {
        super(formItem);
    } 

    wrapContent(payload: any) {
        for (let props in payload) {
            if (this.formIten.name === props && typeof props== 'string') {
                this.formIten.initialValue = payload[props.toString()];
            }
        }
    }
}