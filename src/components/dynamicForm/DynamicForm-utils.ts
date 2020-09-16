export const getInitialValues = (formData: any) => {
  return formData.reduce((acc: any, item: any) => {
    let initialValue;
    switch (item.field) {
      case "multi":
        const result = item.options.find(
          (op: any) => op.isDefault === true || op.default === true
        );

        initialValue = result ? result.value : null;
        break;
      default:
        initialValue = item.initialValue ? item.initialValue : "";
    }

    return { ...acc, [item.name]: initialValue };
  }, {});
};

export interface FieldProps {
  name: string;
  prop: any;
  newValue: any;
}
export const updateDynamicFormFieldProp = (
  formData: [],
  fieldProps: FieldProps
) => {
  return formData.map((field: any) => {
    if (field.name === fieldProps.name) {
      field[fieldProps.prop] = fieldProps.newValue;
    }

    return field;
  });
};

export const parseJsonToFormArray = (formJson: any): Array<any> => {
  let output = [];
  for (const item in formJson) {
    let object = formJson[item];
    if (!formJson[item].name) {
      object.name = item;
    }
    output.push(object);
  }
  return output;
};
