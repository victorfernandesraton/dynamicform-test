import FormItemSingle from "./FormItemSingle";
import FormItemMulti from "./FormItemlMuti";
import { FormField } from "./FormItemStrategy";

export default function FormFactory(formItem: any) : FormField {
    switch (formItem.field) {
        case 'multi':
            return new FormItemMulti(formItem);
            
        case 'single':
        default:
            return new FormItemSingle(formItem);
    }
}