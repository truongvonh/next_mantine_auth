import React, { ReactNode } from 'react';
import { Checkbox, CheckboxProps, Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { TextAreaProps } from 'antd/lib/input/TextArea';
import { FieldInputProps, FormikErrors, FormikTouched } from 'formik';

// ______________________________________________________
//
// @ Types

type Props = {
  label?: string;
  field: FieldInputProps<any>;
  textAreaProps?: TextAreaProps;
  checkboxProps?: CheckboxProps;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<any>> | Promise<void>;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
} & Omit<FormItemProps, 'children'>;
// ______________________________________________________
//
// @ View

const CheckboxField: React.FC<Props> = (props) => {
  const { label, touched, error, field, checkboxProps, ...rest } = props;

  const handleChangeCheckboxField = (e: { target: { checked: any } }) => {
    props.setFieldValue(field.name, e.target.checked);
  };
  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={(touched && error) as ReactNode}
      {...rest}
    >
      <Checkbox
        {...field}
        {...checkboxProps}
        style={{ fontSize: 'inherit' }}
        onChange={handleChangeCheckboxField}
      />
    </Form.Item>
  );
};

export default CheckboxField;
