import FormWrapFactory from "../FormWrap/FormWrapFzctory";

export interface FormObject {
    formSkeleton: Array<any>;
    mutation: string;
    form?: Array<any>;
}

export default abstract class FormStrategy {
    protected mutation: string;
    protected formSkeleton: Array<any>
    protected form: Array<any>;
    protected entity: any
    
    constructor(formObject: FormObject) {
        this.formSkeleton = formObject.formSkeleton;
        this.form = formObject.form || [];
        this.mutation = formObject.mutation;
    }

    makeMutation(): any {
        // TODO request para mutation
        return this.mutation;
    }

    getForm() {
        return this.form;
    }

    preWrap(payload: any, excludes?: Array<string>) {
        this.form = this.formSkeleton.map(formItem => {
            let newFormIten = FormWrapFactory(formItem);
            if (!excludes?.includes(formItem.name)) {
                newFormIten.wrapContent(payload);
            }
            return newFormIten.getFormIten();
        })
    }

    abstract wrap(payload: any): void
    
    abstract validate(): boolean;
    
}