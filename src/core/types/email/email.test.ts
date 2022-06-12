import { mapAllE } from '@/config/tests/fixures'
import { pipe } from 'fp-ts/function'
import { emailCodec } from './email'

it('should validate the email correctly', () => {
  pipe(
    'sue12@mail.com',
    emailCodec.decode,
    mapAllE(result =>
      expect(result).toBe('sue12@mail.com'),
    ),
  )
})

it('should return an error if the email is invalid', () => {
  pipe(
    'invalid-mail',
    emailCodec.decode,
    mapAllE((error: any) => expect(error[0]?.message).toBe('Invalid email'),
    ),
  )
})
