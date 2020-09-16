import FormFieldOject from "./FormItemObject";

export interface FormField {
  getFormIten(): any;
  wrapContent(payload: any): void;
}
export default abstract class FormItemStrategy {
  protected formIten: FormFieldOject;

  constructor(formIten: any) {
    this.formIten = formIten;
  }

  getFormIten(): any {
    return this.formIten;
  }

  abstract wrapContent(payload: any): void;
}
