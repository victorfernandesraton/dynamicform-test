import FormWrapInput from "./FormWrapInput";
import FormWrapSelect from "./FormWrapSelect";
import { FormField } from "./FormWrapStrategy";

export default function FormWrapFactory(formItem: any) : FormField {
    switch (formItem.type) {
        case 'select':
        case 'picker':
            return new FormWrapSelect(formItem);
            
        default:
            return new FormWrapInput(formItem);
    }
}