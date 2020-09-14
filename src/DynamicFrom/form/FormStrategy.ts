import * as Yup from 'yup';

import FormItemFactory from "../FormItem/FormItemFactory";

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

    formReplace(payload: any) {
        this.form = this.formSkeleton.map(formItem => {
            let newFormIten = FormItemFactory(formItem);
            newFormIten.wrapContent(payload);
            return newFormIten.getFormIten();
        })
    }

    abstract wrap(payload: any): void
    
    validateSchema(): any {
        let _validationSchema = this.form.reduce((result, item, index, array) => {
            result[item.name] = index;
            return result;
        }, {});

        for(const item of this.form){

            console.log(item.name, item.field)
            if(item.field === "text"){
                _validationSchema[item.name] = Yup.string();
            }else if(item.field === "email"){
                _validationSchema[item.name] = Yup.string().email()
            }else if(item.field === "select"){
                _validationSchema[item.name] = Yup.string().oneOf(item.options.map((o: any) => o.value));
            }

            if(item.required){
                _validationSchema[item.name] = _validationSchema[item.name].required('Required');
            }
        }

        return Yup.object().shape({ ..._validationSchema });
    }
    
}