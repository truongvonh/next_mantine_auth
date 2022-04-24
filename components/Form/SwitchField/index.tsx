import React, { ReactNode } from 'react';
import { Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import Switch, { SwitchProps } from 'antd/lib/switch';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';

// ______________________________________________________
//
// @ Types

type Props = {
  field: FieldInputProps<any>;
  label?: string;
  switchProps?: SwitchProps;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  onChange?: (e: any) => void;
} & Omit<FormItemProps, 'children'>;
// ______________________________________________________
//
// @ View

const SwitchField: React.FC<Props> = (props) => {
  const { label, touched, error, field, switchProps, onChange, ...rest } =
    props;

  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={(touched && error) as ReactNode}
      {...rest}
    >
      <Switch
        {...field}
        checked={Boolean(field.value)}
        {...switchProps}
        onChange={onChange}
      />
    </Form.Item>
  );
};

export default SwitchField;
