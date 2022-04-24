import React, { ReactComponentElement, ReactNode } from 'react';
import { Form, Input } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';
import styled from 'styled-components';

// ______________________________________________________
//
// @ Types
export type InputFieldProps = {
  label?: string;
  children?: any;
  field: FieldInputProps<any>;
  inputProps?: InputProps;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  disabled?: boolean;
  callbackOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFieldValue?: (field: string, value: any) => void;
  pattern?: any;
  ref?: any;
} & Omit<FormItemProps, 'children'>;
// ______________________________________________________
//
// @ View

const InputField: React.FC<InputFieldProps> = (props) => {
  const {
    label,
    touched,
    error,
    field,
    inputProps,
    callbackOnChange,
    disabled,
    pattern,
    ref,
    ...rest
  } = props;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (pattern) {
      if (e.target.value === '' || pattern.test(e.target.value)) {
        field.onChange(e);
        callbackOnChange && callbackOnChange(e);
      }
    } else {
      field.onChange(e);
      callbackOnChange && callbackOnChange(e);
    }
  };

  return (
    <Div>
      <Form.Item
        colon={false}
        label={label}
        validateStatus={error && touched ? 'error' : ''}
        help={(touched && error) as ReactNode}
        {...rest}
      >
        <Input
          {...field}
          {...inputProps}
          style={{ fontSize: 'inherit' }}
          onChange={onChange}
          disabled={disabled || false}
          ref={ref}
        />
        {props.children}
      </Form.Item>
    </Div>
  );
};

const Div = styled.div`
	.error-message {
		color: red;
		margin-bottom: 0;
	}
`;
export default InputField;
