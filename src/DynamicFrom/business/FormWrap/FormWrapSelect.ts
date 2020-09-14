import FormWrapStrategy from "./FormWrapStrategy";
export default class FormWrapSelect extends FormWrapStrategy {
  wrapContent(payload?: any) {
    if (!this.formIten.type) {
      this.formIten.type = "select";
    } else if (
      !["select", "picker", "radio-group", "checkbox-group"].includes(
        this.formIten.type
      )
    ) {
      throw new Error("invalid field type");
    }
    const initiaOptions = new Array(...this.formIten.options);
    for (let props in payload) {
      if (this.formIten.options && this.formIten.options.length) {
        const options = this.formIten.options.map((el: any) => {
          const {label, value} = el;
          if (this.formIten.name === props && payload[props] === el.value) {
             return {label, value, default: true}
          } 
            return {label,value}
        });

        this.formIten.options = options.find((el: any) => el.default === true) ? options : initiaOptions;
        
        // if (!this.formIten.options.filter((el: any) => el.default === true).length) {
        //   this.formIten.options = initiaOptions 
        // }
      }
    }
  }
}
