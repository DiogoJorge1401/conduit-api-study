import { getErrorMessage, mapAll } from '@/config/tests/fixtures'
import { pipe } from 'fp-ts/function'
import { fromEither } from 'fp-ts/TaskEither'
import { emailCodec } from './email'

it('should validate the email correctly', () => {
  pipe(
    'sue12@mail.com',
    emailCodec.decode,
    fromEither,
    mapAll(result =>
      expect(result).toBe('sue12@mail.com'),
    ),
  )
})

it('should return an error if the email is invalid', () => {
  pipe(
    'invalid-mail',
    emailCodec.decode,
    fromEither,
    mapAll((error) => expect(getErrorMessage(error)).toBe('Invalid email'),
    ),
  )
})
