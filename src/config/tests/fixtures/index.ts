import { pipe } from 'fp-ts/lib/function';
import { map, mapLeft, TaskEither } from 'fp-ts/TaskEither';
import { Email, Password, Slug } from '@/core/types';

export const unsafeEmail = (value: string): Email => {
	return value as Email;
};
export const unsafeUsername = (value: string): Slug => {
	return value as Slug;
};

export const unsafePassword = (value: string): Password => {
	return value as Password;
};

type Callback<E, T> = (a: E | T) => unknown;

type MapAll =
	<E, T>(fn: Callback<E, T>) =>
		(data: TaskEither<E, T>) =>
			TaskEither<unknown, unknown>;

export const mapAll: MapAll = (fn) => (data) => {
	return pipe(
		data,
		map(fn),
		mapLeft(fn),
	);
};

export const getErrorMessage = (errors: unknown): string => {
	return Array.isArray(errors) ? errors[0].message : '';
};
