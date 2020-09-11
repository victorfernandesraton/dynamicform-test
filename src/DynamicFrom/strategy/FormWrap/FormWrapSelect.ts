import FormWrapStrategy from './FormWrapStrategy';
export default class FormWrapSelect extends FormWrapStrategy {
    
    constructor(formItem: any) {
        super(formItem);
    } 

    WrapContent(payload: any) {
        for (let props in payload) {
           if (this.formIten.options && this.formIten.options.length) {
               this.formIten.options.map((el: any) => {
                   if (this.formIten.name === props && payload[props] === el.value ) {
                       el.default = true;
                   }
                   console.log(el, props)
                   return el;
               })
           }
        }
    }
}