import { Profile } from '@/core/types/profile'

export type Comment = {
  id: number
  body: string
  author: Profile
  createdAt: Date
  updated: Date
}
