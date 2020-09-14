import React from 'react';
import {Formik} from 'formik';

import SwitchFormFields from './DynamicFormSwitchFields';
import {getInitialValues} from './DynamicForm-utils';
// import {FormContainer} from './DynamicForm-style';

const DynamicFormView = (props: any) => {
  const {formData, onSubmit, styled, validationSchema, ...extraProps} = props;
  // TODO: inplementar em nativo
  // const Container = styled ? styled : FormContainer;
  return (
    <Formik onSubmit={onSubmit} initialValues={getInitialValues(formData)} validationSchema={validationSchema} {...extraProps}>
      {(formProps) => {
        return (
          <>
            <SwitchFormFields
              formData={formData}
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
