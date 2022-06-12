import * as t from 'io-ts';
import { withMessage } from 'io-ts-types';

type PasswordBrand = {
  readonly Password: any
};

export const passwordCodec = withMessage(
	t.brand(
		t.string,
		(value): value is t.Branded<string, PasswordBrand> => isPassword(value),
		'Password',
	),
	() => 'Password must have between 8 and 20 characters',
);

export type Password = t.TypeOf<typeof passwordCodec>;

const MIN_LENGHT = 8, MAX_LENGHT = 20;

function isPassword (value: string) {
	const valueLenght = value.length;
	return valueLenght >= MIN_LENGHT && valueLenght <= MAX_LENGHT;
}