import React, { ReactNode } from 'react';
import { Form, AutoComplete } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { AutoCompleteProps } from 'antd/lib/auto-complete';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';

// ______________________________________________________
//
// @ Types

type Props = {
  label?: string;
  field: FieldInputProps<any>;
  // options?: {
  //   value: number | string;
  //   label?: string | React.ReactElement;
  //   options?: React.ReactElement[];
  //   disabled?: boolean;
  // }[];
  options?: any;
  setFieldValue: (field: string, value: any) => void;
  autoCompleteProps?: AutoCompleteProps;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  render?: React.ReactElement;
  callbackOnChange?: (e: any) => void;
  callbackOnSearch?: (e: any) => void;
  callbackOnSelect?: (e: any) => void;
} & Omit<FormItemProps, 'children'>;
// ______________________________________________________
//
// @ View

const AutoCompleteField: React.FC<Props> = (props) => {
  const {
    label,
    touched,
    error,
    field,
    options,
    setFieldValue,
    autoCompleteProps,
    render,
    callbackOnChange,
    callbackOnSearch,
    callbackOnSelect,
    ...rest
  } = props;

  const onChange = (e: any) => {
    setFieldValue(field.name, e);
    callbackOnChange && callbackOnChange(e);
  };

  const onSearch = (e: any) => {
    callbackOnSearch && callbackOnSearch(e);
  };

  const onSelect = (e: any) => {
    setFieldValue(field.name, e);
    callbackOnSelect && callbackOnSelect(e);
  };

  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={(touched && error) as ReactNode}
      {...rest}
    >
      <AutoComplete
        {...field}
        options={options}
        onChange={onChange}
        onSearch={onSearch}
        onSelect={onSelect}
        {...autoCompleteProps}
      >
        {render}
      </AutoComplete>
    </Form.Item>
  );
};

export default AutoCompleteField;
