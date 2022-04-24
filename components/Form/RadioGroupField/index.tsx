import React, { ReactNode } from 'react';
import { Form, Radio } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { RadioGroupProps } from 'antd/lib/radio';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';
import { RadioChangeEvent } from 'antd/es';

// ______________________________________________________
//
// @ Types

export type RadioGroupFieldProps = {
  field: FieldInputProps<any>;
  optionsSelect: { label: string; value: number | string }[];
  label?: string;
  radioProps?: RadioGroupProps;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  onChange?: (e: RadioChangeEvent) => void;
  disabled?: boolean;
} & Omit<FormItemProps, 'children'>;
// ______________________________________________________
//
// @ View

const RadioGroupField: React.FC<RadioGroupFieldProps> = (props) => {
  const {
    label,
    touched,
    error,
    field,
    radioProps,
    optionsSelect,
    disabled,
    onChange,
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
      <Radio.Group
        {...field}
        {...radioProps}
        options={optionsSelect}
        onChange={onChange}
        disabled={disabled}
      />
    </Form.Item>
  );
};

export default RadioGroupField;
