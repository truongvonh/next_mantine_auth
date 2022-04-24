import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useTranslation } from 'react-i18next';

export interface Credentials {
  account?: string;
  password?: string;
}

const useForm = () => {
  const { t } = useTranslation();

  const handleLogin = async (_: Credentials) => {
    // TODO: handle login here
  };

  const validationSchema = Yup.object().shape({
    account: Yup.string().required(
      t('validated.required', { name: t('account') })
    ),
    password: Yup.string().required(
      t('validated.required', { name: t('password') })
    ),
  });

  const formik = useFormik<Credentials>({
    initialValues: {
      account: '',
      password: '',
    },
    validationSchema,
    async onSubmit(values) {
      await handleLogin(values);
    },
  });

  return { formik };
};

export default useForm;
