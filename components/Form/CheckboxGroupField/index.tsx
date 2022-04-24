import React, { ReactNode, useMemo } from 'react';
import { Form, Checkbox } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import { CheckboxGroupProps } from 'antd/lib/checkbox';
import { FieldInputProps, FormikTouched, FormikErrors } from 'formik';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// ______________________________________________________
//
// @ Types

type Props = {
  field: FieldInputProps<any>;
  optionsSelect: { label: string; value: number | string }[];
  label?: string;
  checkboxProps?: CheckboxGroupProps;
  touched?: boolean | FormikTouched<any> | FormikTouched<any>[];
  error?: string | string[] | FormikErrors<any> | FormikErrors<any>[];
  onChange?: (checkedValue: Array<CheckboxValueType>) => void;
  hadCheckAll?: boolean;
  setFieldValue?: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<FormikErrors<any>> | Promise<void>;
} & Omit<FormItemProps, 'children'>;
// ______________________________________________________
//
// @ View

const CheckboxGroupField: React.FC<Props> = (props) => {
  const {
    label,
    touched,
    error,
    field,
    checkboxProps,
    optionsSelect,
    onChange,
    setFieldValue,
    hadCheckAll = false,
    ...rest
  } = props;
  const { t } = useTranslation();
  const [checkAll, setCheckAll] = React.useState(false);

  const onCheckAllChange = (e: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setFieldValue &&
      setFieldValue(
        field.name,
        e.target.checked ? optionsSelect?.map((item) => item.value) : []
      );
    setCheckAll(e.target.checked);
  };

  useMemo(() => {
    if (hadCheckAll) {
      setCheckAll(field?.value?.length === optionsSelect?.length);
    }
  }, [field?.value]);

  return (
    <Wrapper className={hadCheckAll ? 'had_check_all' : ''}>
      <Form.Item
        colon={false}
        label={label}
        validateStatus={error && touched ? 'error' : ''}
        help={(touched && error) as ReactNode}
        {...rest}
      >
        {hadCheckAll && (
          <Checkbox onChange={onCheckAllChange} checked={checkAll}>
            {t('request_management.activation.store.distibutor.all')}
          </Checkbox>
        )}
        <Checkbox.Group
          {...field}
          {...checkboxProps}
          options={optionsSelect}
          onChange={onChange}
        />
      </Form.Item>
    </Wrapper>
  );
};

export default CheckboxGroupField;

const Wrapper = styled.div`
	.had_check_all {
		.ant-form-item-control-input-content {
			display: flex;
		}
	}
`;
