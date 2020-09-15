import FormItemStrategy from './FormItemStrategy';
export default class FormItemSingle extends FormItemStrategy {
    
    wrapContent(payload?: any) {
        if (!this.formIten.field) {
            this.formIten.field = 'single'
        }

        if (this.formIten.field !== 'single') {
            throw new Error('Invalid field')
        }
        
        if (payload) {
            for (let props in payload) {
                if (this.formIten.name === props) {
                    this.formIten.initialValue = payload[props.toString()];
                }
            }
        }
    }
}