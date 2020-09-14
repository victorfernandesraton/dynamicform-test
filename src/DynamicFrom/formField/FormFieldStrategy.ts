export default abstract class FormFieldStrategy {
    protected formItem: any;
    
    constructor(formItem: any) {
        this.formItem = formItem;
    }

    abstract validate(): any
}