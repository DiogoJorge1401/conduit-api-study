import { emailCodec } from '@/core/types'
import * as t from 'io-ts'

export const userCodec = t.type({
  email: emailCodec,
  token: t.string,
  username: t.string,
  bio: t.string,
  image: t.string,
})

export type User = t.TypeOf<typeof userCodec>

export const createUserCodec = t.type({
  username: t.string,
  email: emailCodec,
  password: t.string,
})

export type CreateUser = t.TypeOf<typeof createUserCodec>
