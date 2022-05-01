export default interface IInputLang {
	email: string;
	emailLabel: string;
	password: string;
	passwordLabel: string;
	validation: IValidation;
}

interface IValidation {
	emailInvalid: string;
	passwodRule: string;
	notNullField: (fieldName: string) => string;
}
