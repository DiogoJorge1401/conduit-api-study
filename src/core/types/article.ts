import { Profile } from '@/core/types/profile'
import { Tag } from '@/core/types/tag'

export type Article = {
  slug: string
  title: string
  description: string
  body: string
  tagList: Array<Tag>
  favorited: boolean
  favoritesCount: number
  author: Profile
  createdAt: Date
  updatedAt: Date
}

export type Articles = {
  articles: Array<Article>
  articlesCount: number
}
