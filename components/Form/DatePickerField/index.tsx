import React, { ReactNode } from 'react';
import { DatePicker, Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { DatePickerProps } from 'antd/lib/date-picker';
import { FieldInputProps, FormikErrors, FormikTouched } from 'formik';
//import { Moment } from 'moment-timezone';

import moment, { Moment } from 'moment';
// ______________________________________________________
//
// @ Types

type Props = {
  label?: string;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  datepickerProps?: DatePickerProps;
  setFieldValue: (field: string, value: any) => void;
  field: FieldInputProps<any>;
  format?: string;
  placeholder?: string;
  disabled?: boolean;
  callBackOnChange?: (...args: any[]) => void;
} & Omit<FormItemProps, 'children'>;
// ______________________________________________________
//
// @ View
const SelectField: React.FC<Props> = (props) => {
  const {
    label,
    touched,
    error,
    field,
    setFieldValue,
    datepickerProps,
    placeholder,
    format,
    disabled,
    callBackOnChange,
    ...rest
  } = props;

  const onChange = (_: Moment | null, dateString: string) => {
    setFieldValue(field.name, dateString);
    callBackOnChange && callBackOnChange();
  };

  const valueMoment = field.value ? moment(field.value) : undefined;

  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={(touched && error) as ReactNode}
      {...rest}
    >
      <DatePicker
        {...field}
        {...datepickerProps}
        format={format}
        placeholder={placeholder}
        allowClear
        onChange={onChange}
        value={valueMoment}
        style={{ width: '100%' }}
        disabled={disabled}
      />
    </Form.Item>
  );
};

export default SelectField;
