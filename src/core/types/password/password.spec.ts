import { getErrorMessage, mapAll } from '@/config/tests/fixtures';
import { pipe } from 'fp-ts/function';
import { fromEither } from 'fp-ts/TaskEither';
import { passwordCodec } from './password';

it('should validate the password correctly', () => {
	return pipe(
		'sue12345',
		passwordCodec.decode,
		fromEither,
		mapAll((result) => expect(result).toBe('sue12345')),
	)();
});
it('should return an error if password lenght is less than 8', () => {
	return pipe(
		'sue',
		passwordCodec.decode,
		fromEither,
		mapAll((result) => expect(getErrorMessage(result)).toBe('Password must have at least 8 characters')),
	)();
});