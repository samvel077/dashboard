import { AbstractControl, ValidationErrors } from '@angular/forms';

export const PasswordStrengthValidator = (
	control: AbstractControl
): ValidationErrors | null => {
	const value: string = control.value || '';

	if (!value) {
		return null;
	}

	const upperCaseCharacters = /[A-Z]+/g;
	if (upperCaseCharacters.test(value) === false) {
		return {
			passwordStrength: `Password needs to have at least one uppercase letter`,
		};
	}

	const lowerCaseCharacters = /[a-z]+/g;
	if (lowerCaseCharacters.test(value) === false) {
		return {
			passwordStrength: `Password needs to have at least one lowercase letter`,
		};
	}

	const numberCharacters = /[0-9]+/g;
	if (numberCharacters.test(value) === false) {
		return {
			passwordStrength: `Password needs to have at least one number`,
		};
	}

	const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
	if (specialCharacters.test(value) === false) {
		return {
			passwordStrength: `Password needs to have at least one special letter`,
		};
	}
	return null;
};
