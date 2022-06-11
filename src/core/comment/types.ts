import { profileCodec } from '@/core/profile/types'
import * as t from 'io-ts'

export const commentCodec = t.type({
  id: t.number,
  body: t.string,
  author: profileCodec,
  createdAt: t.string,
  updated: t.string,
})

export type Comment = t.TypeOf<typeof commentCodec>
