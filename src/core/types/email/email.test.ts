import { map, mapLeft } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { emailCodec } from './email'

it('should validate the email correctly', () => {
  pipe(
    'sue12@mail.com',
    emailCodec.decode,
    map(result =>
      expect(result).toBe('sue12@mail.com'),
    ),
  )
})

it('should return an error if the email is invalid', () => {
  pipe(
    'invalid-mail',
    emailCodec.decode,
    mapLeft(error => expect(error[0]?.message).toBe('Invalid email'),
    ),
  )
})
