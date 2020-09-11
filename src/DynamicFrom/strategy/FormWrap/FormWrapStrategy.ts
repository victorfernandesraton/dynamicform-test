export default abstract class FormWrapStrategy {
    
    protected formIten: any;

    constructor(formIten: any) {
        this.formIten = formIten;
    }

    getFormIten(): any {
        return this.formIten;
    }

    abstract WrapContent(payload: any) :void
}

