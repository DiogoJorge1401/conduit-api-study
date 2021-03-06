import { profileCodec } from '@/core/profile/types';
import { tagCodec } from '@/core/tag/types';
import { dateCodec, positiveCodec, slugCodec } from '@/core/types';
import * as t from 'io-ts';

export const articleCodec = t.type({
	slug: slugCodec,
	title: t.string,
	description: t.string,
	body: t.string,
	tagList: t.array(tagCodec),
	favorited: t.boolean,
	favoritesCount: positiveCodec,
	author: profileCodec,
	createdAt: dateCodec,
	updatedAt: dateCodec,
});

export type Article = t.TypeOf<typeof articleCodec>;

export const articlesCodec = t.type({
	articles: t.array(articleCodec),
	articlesCount: positiveCodec,
});

export type Articles = t.TypeOf<typeof articlesCodec>;
