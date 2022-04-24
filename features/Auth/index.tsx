import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { InputField } from '@components/Form';
import { Button, Col, Form, Row, Space } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import useForm from './useForm';

const AuthFeature = () => {
  const { t } = useTranslation();
  const { formik } = useForm();

  const { submitForm, getFieldProps, errors, touched, isSubmitting } = formik;
  return (
    <Row justify="center">
      <Col xs={12}>
        <Form className="login_form" layout="vertical">
          <InputField
            label={t('account')}
            field={getFieldProps('account')}
            error={errors.account}
            touched={touched.account}
            inputProps={{
              prefix: <MailOutlined />,
              allowClear: true,
              size: 'large',
            }}
          />
          <InputField
            label={t('password')}
            field={getFieldProps('password')}
            error={errors.password}
            touched={touched.password}
            inputProps={{
              prefix: <LockOutlined />,
              allowClear: true,
              type: 'password',
              size: 'large',
            }}
          />

          <Button loading={isSubmitting} onClick={submitForm} type="primary">
            Primary Button
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default React.memo(AuthFeature);
