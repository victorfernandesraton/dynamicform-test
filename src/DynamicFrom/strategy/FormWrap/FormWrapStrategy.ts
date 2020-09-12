export interface FormField {
    getFormIten(): any;
    wrapContent(payload: any):void; 
}
export default abstract class FormWrapStrategy {
    
    protected formIten: any;

    constructor(formIten: any) {
        this.formIten = formIten;
    }

    getFormIten(): any {
        return this.formIten;
    }

    abstract wrapContent(payload: any) :void
}

