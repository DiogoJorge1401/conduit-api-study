import { map, mapLeft } from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { Email } from './email'

it('should validate the email correctly', () => {
  pipe(
    'sue12@mail.com',
    Email.decode,
    map(result =>
      expect(result).toBe('sue12@mail.com'),
    ),
  )
})

it('should return an error if the email is invalid', () => {
  pipe(
    'invalid-mail',
    Email.decode,
    mapLeft(error => expect(error[0]?.message).toBe('Invalid email'),
    ),
  )
})
