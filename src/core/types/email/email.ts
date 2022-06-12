import * as t from 'io-ts';
import { withMessage } from 'io-ts-types';

type EmailBrand = {
  readonly Email: any
};

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

function isEmail (value: string) {
	return emailRegex.test(value);
}

export const emailCodec = withMessage(
	t.brand(
		t.string,
		(value): value is t.Branded<string, EmailBrand> => isEmail(value),
		'Email',
	),
	() => 'Invalid Email',
);

export type Email = t.TypeOf<typeof emailCodec>;