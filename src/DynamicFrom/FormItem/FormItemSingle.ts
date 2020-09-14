import FormItemStrategy from './FormItemStrategy';
export default class FormItemSingle extends FormItemStrategy {
    
    wrapContent(payload?: any) {
        if (!this.formIten.type) {
            this.formIten.type = 'single'
        }

        if (this.formIten.type !== 'single') {
            throw new Error('Invalid type')
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