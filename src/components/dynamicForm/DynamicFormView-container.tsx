import React, { useMemo } from "react";
import { Formik } from "formik";

import SwitchFormFields from "./DynamicFormSwitchFields";
import { getInitialValues } from "./DynamicForm-utils";
import FormStrategy from "../../DynamicFrom/form/FormStrategy";
// import {FormContainer} from './DynamicForm-style';

const DynamicFormView = (props: any) => {
  const { form, onSubmit, styled, validations, entity, ...extraProps } = props;

  const formData = useMemo(() => {
    if (entity && entity instanceof FormStrategy && !form) {
      entity.wrap();
      return entity.getForm();
    } else {
      return form;
    }
  }, [entity, form]);

  const validateSchema = useMemo(() => {
    if (entity && entity instanceof FormStrategy && !validations) {
      return entity.validateSchema() 
    }
    return validations;
  }, [entity, validations]);

  // TODO: inplementar em nativo
  // const Container = styled ? styled : FormContainer;
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={getInitialValues(formData)}
      validationSchema={validateSchema}
      enableRenitialize // Necessário para realizar o update constante do formulário
      {...extraProps}
    >
      {(formProps) => {
        return (
          <>
            <SwitchFormFields
              form={formData}
              formProps={formProps}
              extraProps={extraProps}
            />
          </>
        );
      }}
    </Formik>
  );
};

export default DynamicFormView;
