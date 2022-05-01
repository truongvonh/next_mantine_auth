import useLanguage from '@libs/Languages/useLanguage';
import {
	Button,
	Container,
	Grid,
	Paper,
	TextInput,
	Title,
} from '@mantine/core';
import React from 'react';
import { SiAuth0 } from 'react-icons/si';
import { MdEmail, MdPassword } from 'react-icons/md';
import styles from './styles.module.css';
import useAuth from './useAuth';
import Link from 'next/link';

const AuthFeature = () => {
	const { LanguageOfButton, CommonLang, LanguageOfInput } = useLanguage();

	const { authForm, loading, handleSignin } = useAuth();

	return (
		<Container size={'md'}>
			<Grid
				justify={'center'}
				className={styles.containerWrapper}
				align={'center'}
			>
				<Grid.Col xs={12} md={4}>
					<Paper p={'lg'} shadow={'lg'} radius={'md'}>
						<Title order={2}>{CommonLang.welcome}</Title>

						<form onSubmit={() => null}>
							<TextInput
								mt={'lg'}
								mb={'md'}
								required
								icon={<MdEmail />}
								label={LanguageOfInput.emailLabel}
								placeholder={LanguageOfInput.email}
								{...authForm.getInputProps('email')}
							/>

							<TextInput
								mb={'lg'}
								type={'password'}
								required
								icon={<MdPassword />}
								label={LanguageOfInput.passwordLabel}
								placeholder={LanguageOfInput.password}
								{...authForm.getInputProps('password')}
							/>

							<Grid justify={'center'} p={'xs'}>
								<Link href={'/api/auth/signin'} onClick={handleSignin}>
									<Button
										mb={'lg'}
										size="xs"
										fullWidth
										leftIcon={<SiAuth0 />}
										variant="outline"
										loading={loading}
										type="submit"
									>
										{LanguageOfButton.login}
									</Button>
								</Link>
							</Grid>
						</form>
					</Paper>
				</Grid.Col>
			</Grid>
		</Container>
	);
};

export default React.memo(AuthFeature);
