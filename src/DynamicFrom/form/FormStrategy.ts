import * as Yup from "yup";

import FormItemFactory from "../FormItem/FormItemFactory";

export interface FormObject {
  formSkeleton: Array<any>;
  mutation: string;
  form?: Array<any>;
}

export default abstract class FormStrategy {
  protected mutation: string;
  protected formSkeleton: Array<any>;
  protected form: Array<any>;
  protected entity: any;

  constructor(formObject: FormObject) {
    this.formSkeleton = [...formObject.formSkeleton];
    this.form = formObject.form ? [...formObject.form]: [];
    this.mutation = formObject.mutation;
  }

  abstract wrap(payload?: any): void;

  public build() {
    this.formReplace(this.entity)
  }

  formReplace(payload?: any) {
    let list = [];
    for (const iten of this.formSkeleton) {
      const element = FormItemFactory(iten);
      if (payload) {
        element.wrapContent(payload);
      }
      let val = element.getFormIten()
      list.push(val);
    }
    this.form = Object.assign(list);
  }

  public makeMutation(): any {
    // TODO request para mutation
    return this.mutation;
  }

  public getForm(): Array<any> {
    return this.form;
  }

  getFormSkeleton(): Array<any> {
    return this.formSkeleton;
  }

  // TODO: reformular
  validateSchema(): any {
    let _validationSchema = this.form.reduce((result, item, index, array) => {
      if (["text", "email"].includes(item.type)) {
        result[item.name] = index;
      }
      return result;
    }, {});

    for (const item of this.form) {
      if (item.type === "email") {
        _validationSchema[item.name] = Yup.string().email(
          `${item.label} is not valid email`
        );
      } else if (item.type) {
        _validationSchema[item.name] = Yup.string();
      }
      if (item.minLength) {
        _validationSchema[item.name] = _validationSchema[item.name].min(
          item.minLength,
          `${item.label} possui caracteres insufucientes`
        );
      }
      if (item.maxLength) {
        _validationSchema[item.name] = _validationSchema[item.name].max(
          item.maxLength,
          `${item.label} possui excesso de caracteres`
        );
      }

      if (item.required) {
        _validationSchema[item.name] = _validationSchema[item.name].required(
          `${item.label} is required`
        );
      }
    }

    return Yup.object().shape({ ..._validationSchema });
  }
}
