import FormWrapStrategy from './FormWrapStrategy';
export default class FormWrapInput extends FormWrapStrategy {
    
    wrapContent(payload: any) {
        if (!this.formIten.type) {
            this.formIten.type = 'text'
        } else if (!['text', 'name', 'email'].includes(this.formIten.type)) {
            throw new Error('invalid field type')
        }

        for (let props in payload) {
            if (this.formIten.name === props && typeof props== 'string') {
                this.formIten.initialValue = payload[props.toString()];
            }
        }
    }
}