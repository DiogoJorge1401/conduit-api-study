import { fromEither } from 'fp-ts/TaskEither'
import { pipe } from 'fp-ts/lib/function'
import { getErrorMessage, mapAll } from '@/config/tests/fixtures'
import { urlCodec } from './url'

it('should validate the url correctly', () => {
  pipe(
    'https://uibakery.io',
    urlCodec.decode,
    fromEither,
    mapAll(result =>
      expect(result).toBe('https://uibakery.io'),
    ),
  )
})

it('should return an error if the url is invalid', () => {
  pipe(
    'invalid-url',
    urlCodec.decode,
    fromEither,
    mapAll((error) => expect(getErrorMessage(error)).toBe('Invalid url'),
    ),
  )
})
