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
    for (let props in payload) {
      if (this.formIten.options && this.formIten.options.length) {
        this.formIten.options.map((el: any) => {
          if (this.formIten.name === props && payload[props] === el.value) {
            el.default = true;
        } else {
            delete el.default;
        }
        return el;
        });
      }
    }
  }
}
