import { getErrorMessage, mapAll } from '@/config/tests/fixtures';
import { pipe } from 'fp-ts/function';
import { fromEither } from 'fp-ts/TaskEither';
import { positiveCodec } from './positive';

it('should validate the number correctly', () => {
	return pipe(
		1,
		positiveCodec.decode,
		fromEither,
		mapAll((result) => expect(result).toBe(1)),
	)();
});
it('should return an error if number is less than zero', () => {
	return pipe(
		-1,
		positiveCodec.decode,
		fromEither,
		mapAll((result) => expect(getErrorMessage(result)).toBe('Number must be greater than or equal to zero')),
	)();
});
