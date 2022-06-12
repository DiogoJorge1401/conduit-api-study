import { emailCodec, slugCodec, urlCodec } from '@/core/types'
import * as t from 'io-ts'

export const userCodec = t.type({
  email: emailCodec,
  token: t.string,
  username: slugCodec,
  bio: t.string,
  image: urlCodec,
})

export type User = t.TypeOf<typeof userCodec>

export const createUserCodec = t.type({
  username: userCodec,
  email: emailCodec,
  password: t.string,
})

export type CreateUser = t.TypeOf<typeof createUserCodec>
