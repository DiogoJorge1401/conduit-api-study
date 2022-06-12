import * as t from 'io-ts';
import { withMessage } from 'io-ts-types';

type SlugBrand = {
  readonly Slug: any
};

export const slugCodec = withMessage(
	t.brand(
		t.string,
		(value): value is t.Branded<string, SlugBrand> => isSlug(value),
		'Slug',
	),
	() => 'Invalid Slug',
);

const SlugRegex = /^[a-z0-9]+(?:(?:-|_)+[a-z0-9]+)*$/gm;

export type Slug = t.TypeOf<typeof slugCodec>;

function isSlug (value: string) {
	return SlugRegex.test(value);
}
