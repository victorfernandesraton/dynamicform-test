export const textInputFromParser = ({form, payload}) => {
  return form.map((el) => {
    if (payload.hasOwnPropety(el.name)) {
      el.initialValue = payload[el.name];
    }
    return el;
  });
};

export const selectFormParser = ({formOpts, payload}) => {
  return formOpts.map((opts) => {
    if (payload.hasOwnPropety(opts.value)) {
      opts.default = true;
    }
  });
};

export const getInitialValues = (formData = []) => {
  return formData.reduce((acc, item) => {
    let initialValue;
    switch (item.type) {
      case 'select':
      case 'switch':
        const result = item.options.find(
          (op) => op.isDefault === true || op.default === true,
        );

        initialValue = result ? result.value : null;
        break;
      default:
        initialValue = item.initialValue ? item.initialValue : '';
    }

    return {...acc, [item.name]: initialValue};
  }, {});
};

export const updateDynamicFormFieldProp = (
  formData,
  {name, prop, newValue},
) => {
  return formData.map((field) => {
    if (field.name === name) {
      field[prop] = newValue;
    }

    return field;
  });
};
