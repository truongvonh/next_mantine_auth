import React, { ReactNode } from 'react';
import { Form, Input } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { TextAreaProps } from 'antd/lib/input/TextArea';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';

const { TextArea } = Input;

// ______________________________________________________
//
// @ Types

type Props = {
  label?: string | React.ReactElement;
  field: FieldInputProps<any>;
  textAreaProps?: TextAreaProps;
  placeholder?: string;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  disabled?: boolean;
} & Omit<FormItemProps, 'children'>;
// ______________________________________________________
//
// @ View

const TextAreaField: React.FC<Props> = (props) => {
  const {
    label,
    touched,
    error,
    field,
    textAreaProps,
    placeholder,
    disabled,
    ...rest
  } = props;
  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={(touched && error) as ReactNode}
      {...rest}
    >
      <TextArea
        {...field}
        {...textAreaProps}
        disabled={disabled}
        placeholder={placeholder}
        style={{ fontSize: 'inherit' }}
      />
    </Form.Item>
  );
};

export default TextAreaField;
