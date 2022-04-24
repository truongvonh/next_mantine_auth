import React, { ReactNode } from 'react';
import { Form, Select } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { SelectProps } from 'antd/lib/select';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';

// ______________________________________________________
//
// @ Types

type Props = {
  label?: string;
  field: FieldInputProps<any>;
  optionsSelect: {
    label: string | React.ReactElement;
    value: number | string;
    disabled?: boolean;
  }[];
  setFieldValue: (field: string, value: any) => void;
  selectProps?: SelectProps<any>;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  callbackOnChange?: (e: any) => void;
  callbackOnSearch?: (e: any) => void;
  notFoundContent?: React.ReactNode;
  disabled?: boolean;
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
    selectProps,
    optionsSelect,
    setFieldValue,
    callbackOnChange,
    callbackOnSearch,
    notFoundContent,
    disabled,
    ...rest
  } = props;

  const onChange = (e: any) => {
    setFieldValue(field.name, e);
    callbackOnChange && callbackOnChange(e);
  };

  const handleSearch = (value: any) => {
    if (value) {
      callbackOnSearch && callbackOnSearch(value);
    } else if (selectProps?.mode != 'multiple') {
      setFieldValue(field.name, '');
    }
  };

  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={(touched && error) as ReactNode}
      {...rest}
    >
      <Select
        {...field}
        {...selectProps}
        options={optionsSelect}
        onChange={onChange}
        onSearch={handleSearch}
        notFoundContent={notFoundContent}
        disabled={disabled}
      />
    </Form.Item>
  );
};

export default SelectField;
