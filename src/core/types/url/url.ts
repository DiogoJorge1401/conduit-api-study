import * as t from 'io-ts';
import { withMessage } from 'io-ts-types';

type URLBrand = {
  readonly URL: any
};

export const urlCodec = withMessage(
	t.brand(
		t.string,
		(value): value is t.Branded<string, URLBrand> => isValidUrl(value),
		'URL',
	),
	() => 'Invalid Url',
);

const URLRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;

function isValidUrl (value: string) {
	return URLRegex.test(value);
}
