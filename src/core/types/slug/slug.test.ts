import { getErrorMessage, mapAll } from '@/config/tests/fixtures';
import { pipe } from 'fp-ts/lib/function';
import { fromEither } from 'fp-ts/lib/TaskEither';
import { slugCodec } from './slug';

it('should validate the slug correctly', () => {
	return pipe(
		'123-hello',
		slugCodec.decode,
		fromEither,
		mapAll((value) => expect(value).toBe('123-hello')),
	)();
});
it('should return an error if the slug is invalid', () => {
	return pipe(
		'123-Hello',
		slugCodec.decode,
		fromEither,
		mapAll((value) => expect(getErrorMessage(value)).toBe('Invalid Slug')),
	)();
});
