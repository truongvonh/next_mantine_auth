import useLanguage from '@libs/Languages/useLanguage';
import { useForm, yupResolver } from '@mantine/form';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { object, string } from 'yup';
import { PasswordRuleRex } from './constants';

interface IFormAuth {
	email: string;
	password: string;
}

const useAuth = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const { LanguageOfInput } = useLanguage();

	const schema = object({
		email: string()
			.email(LanguageOfInput.validation.emailInvalid)
			.required(LanguageOfInput.validation.notNullField(LanguageOfInput.email)),
		password: string()
			.required(
				LanguageOfInput.validation.notNullField(LanguageOfInput.password)
			)
			.matches(PasswordRuleRex, LanguageOfInput.validation.passwodRule),
	});

	const initialValues: IFormAuth = {
		email: '',
		password: '',
	};

	const handleSignin = async (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		signIn();
	};

	const authForm = useForm<IFormAuth>({
		initialValues,
		schema: yupResolver(schema),
	});

	return {
		authForm,
		loading,
		handleSignin,
	};
};

export default useAuth;
