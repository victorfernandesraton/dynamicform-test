import FormItemSInge from "./FormItemSingle";
import FormItemMulti from "./FormItemlMuti";
import { FormField } from "./FormItemStrategy";

export default function FormWrapFactory(formItem: any) : FormField {
    switch (formItem.type) {
        case 'multi':
            return new FormItemMulti(formItem);
            
        case 'single':
        default:
            return new FormItemSInge(formItem);
    }
}