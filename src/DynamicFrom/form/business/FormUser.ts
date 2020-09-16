import FormStrategy, { FormObject } from "../FormStrategy";

export default class FormUser extends FormStrategy {
  constructor(formObjext: FormObject, user?: any) {
    super(formObjext);
    this.entity = {...user};
  }

  wrap(payload?: any): void {
    if (payload) {
      for(const props in payload) {
        for (const formItem in this.form) {
          if (this.form[formItem].name === props) {
            const item = this.form[formItem];
            if (item.field === 'single') {
              this.form[formItem].initialValue = payload[props]
            } else if (item.field === 'multi') {
              this.form[formItem]?.options?.map((el: any) => {
                if(el.value === payload[props]) {
                  console.log(el)
                  return {...el, default: true}
                }
                return el;
              })
            }
          } 
        }
      }
    }
    }
}
