import * as t from 'io-ts'
import { slugCodec, urlCodec } from '../types'

export const profileCodec = t.type({
  username: slugCodec,
  bio: t.string,
  image: urlCodec,
  following: t.boolean,
})

export type Profile = t.TypeOf<typeof profileCodec>
