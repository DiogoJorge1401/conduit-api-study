import * as t from 'io-ts';
import { withMessage } from 'io-ts-types';

type DateBrand = {
  readonly Date: any
};

export const dateCodec = withMessage(
	t.brand(
		t.string,
		(value): value is t.Branded<string, DateBrand> => isDate(value),
		'Date',
	),
	() => 'Invalid Date',
);

const DateRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)((-(\d{2}):(\d{2})|Z)?)$/gm;

function isDate (value: string) {
	return DateRegex.test(value);
}
