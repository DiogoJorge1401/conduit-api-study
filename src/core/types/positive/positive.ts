import * as t from 'io-ts'
import { withMessage } from 'io-ts-types'

type PositiveBrand = {
  readonly Positive: any
}

export const positiveCodec = withMessage(
  t.brand(
    t.number,
    (value): value is t.Branded<number, PositiveBrand> => isPositive(value),
    'Positive',
  ),
  () => 'Number must be greater than or equal to zero',
)
function isPositive (value: number) {
  return value >= 0
}
