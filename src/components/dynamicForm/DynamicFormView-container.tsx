import React from 'react';
import {Formik} from 'formik';

import SwitchFormFields from './DynamicFormSwitchFields';
import {getInitialValues} from './DynamicForm-utils';
// import {FormContainer} from './DynamicForm-style';

const DynamicFormView = (props) => {
  const {formData, onSubmit, styled, ...extraProps} = props;
  // TODO: inplementar em nativo
  // const Container = styled ? styled : FormContainer;
  return (
    <Formik onSubmit={onSubmit} initialValues={getInitialValues(formData)}>
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
