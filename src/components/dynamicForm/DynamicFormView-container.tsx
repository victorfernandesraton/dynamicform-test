import React from 'react';
import {Formik} from 'formik';

import SwitchFormFields from './DynamicFormSwitchFields';
import {getInitialValues} from './DynamicForm-utils';
import {FormContainer} from './DynamicForm-style';

const DynamicFormView = (props) => {
  const {formData, onSubmit, styled, ...extraProps} = props;
  const Container = styled ? styled : FormContainer;
  return (
    <Formik onSubmit={onSubmit} initialValues={getInitialValues(formData)}>
      {(formProps) => {
        return (
          <Container>
            <SwitchFormFields
              formData={formData}
              formProps={formProps}
              extraProps={extraProps}
            />
          </Container>
        );
      }}
    </Formik>
  );
};

export default DynamicFormView;
