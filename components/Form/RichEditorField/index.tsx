import React, { ReactNode } from 'react';
import { Form } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { FieldInputProps, FormikErrors, FormikTouched } from 'formik';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// ______________________________________________________
//
// @ Types

type Props = {
  label?: string;
  field: FieldInputProps<any>;
  // @ts-ignore
  richTextEditorProps?: ReactQuill.ComponentProps;
  setFieldValue: (field: string, value: any) => void;
  placeholder?: string;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  disable?: boolean;
} & Omit<FormItemProps, 'children'>;
// ______________________________________________________
//
// @ View

const RichEditorField: React.FC<Props> = (props) => {
  const {
    label,
    touched,
    error,
    field,
    richTextEditorProps,
    setFieldValue,
    placeholder,
    disable,
    ...rest
  } = props;

  const handleChange = (value: string) => {
    setFieldValue(field.name, value);
  };
  return (
    <Form.Item
      colon={false}
      label={label}
      validateStatus={error && touched ? 'error' : ''}
      help={(touched && error) as ReactNode}
      {...rest}
    >
      <ReactQuill
        theme={'snow'}
        {...richTextEditorProps}
        value={field.value}
        onChange={handleChange}
        placeholder={placeholder}
        style={{ fontSize: 'inherit' }}
        readOnly={disable || false}
      />
    </Form.Item>
  );
};

export default RichEditorField;
