import { EmailType } from '@/core/types/scalar'

export type User = {
  email: EmailType
  token: string
  username: string
  bio: string
  image: string | null
}

export type CreateUser = {
  username: string
  email: EmailType
  password: string
}
