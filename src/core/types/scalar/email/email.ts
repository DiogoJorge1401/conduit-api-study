import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'

type EmailBrand = {
  readonly Email: unique symbol
}

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g

function isEmail(value: string) {
  return emailRegex.test(value)
}

export const Email = withMessage(
  t.brand(
    t.string,
    (value): value is t.Branded<string, EmailBrand> => isEmail(value),
    'Email',
  ),
  () => 'Invalid email',
)

export type EmailType = t.TypeOf<typeof Email>