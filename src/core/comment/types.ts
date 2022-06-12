import { profileCodec } from '@/core/profile/types'
import * as t from 'io-ts'
import { dateCodec } from '@/core/types'

export const commentCodec = t.type({
  id: t.number,
  body: t.string,
  author: profileCodec,
  createdAt: dateCodec,
  updated: dateCodec,
})

export type Comment = t.TypeOf<typeof commentCodec>
