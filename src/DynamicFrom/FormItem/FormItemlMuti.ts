import FormItemStrategy from "./FormItemStrategy";

export default class FormItemMulti extends FormItemStrategy {

  wrapContent(payload?: any) {
    if (!this.formIten.type) {
      this.formIten.type = "multi";
    }

    if (!this.formIten.options || (!this.formIten.options.length && this.formIten.options.length !== 0)) {
      throw new Error('invalid field type')
    }

    const initiaOptions = this.formIten.options;
    for (let props in payload) {
      if (this.formIten.options && this.formIten.options.length) {
        let options = [];
        options = this.formIten.options.map((el: any) => {
          const {label, value} = el;
          if (this.formIten.name === props && payload[props] === el.value) {
             return {label, value, default: true}
          } 
            return {label,value}
        });

        this.formIten.options = options.find((el: any) => el.default === true) ? options : initiaOptions;
      }
    }
  }
}
