import { pipe } from 'fp-ts/lib/function'
import { mapAllE } from '@/config/tests/fixures'
import { urlCodec } from './url'

it('should validate the url correctly', () => {
  pipe(
    'https://uibakery.io',
    urlCodec.decode,
    mapAllE(result =>
      expect(result).toBe('https://uibakery.io'),
    ),
  )
})

it('should return an error if the url is invalid', () => {
  pipe(
    'invalid-url',
    urlCodec.decode,
    mapAllE((error: any) => expect(error[0]?.message).toBe('Invalid url'),
    ),
  )
})
