import * as t from 'io-ts'
import { tagCodec } from '@/core/tag/types'
import { profileCodec } from '@/core/profile/types'

export const articleCodec = t.type({
  slug: t.string,
  title: t.string,
  description: t.string,
  body: t.string,
  tagList: t.array(tagCodec),
  favorited: t.boolean,
  favoritesCount: t.number,
  author: profileCodec,
  createdAt: t.string,
  updatedAt: t.string,
})

export type Article = t.TypeOf<typeof articleCodec>

export const articlesCodec = t.type({
  articles: t.array(articleCodec),
  articlesCount: t.number,
})

export type Articles = t.TypeOf<typeof articlesCodec>
