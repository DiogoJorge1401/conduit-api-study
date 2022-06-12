import { getErrorMessage, mapAll } from '@/config/tests/fixtures';
import { pipe } from 'fp-ts/function';
import { fromEither } from 'fp-ts/TaskEither';
import { dateCodec } from './date';

it('should validate the date correctly', () => {
	const date = new Date().toISOString();
	return pipe(
		date,
		dateCodec.decode,
		fromEither,
		mapAll((result) => expect(result).toEqual(date)),
	)();
});
it('should return an error if the date is invalid', () => {
	return pipe(
		'2022-06-12',
		dateCodec.decode,
		fromEither,
		mapAll((result) => expect(getErrorMessage(result)).toBe('Invalid Date')),
	)();
});
