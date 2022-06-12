import { pipe } from 'fp-ts/lib/function';
import { map, mapLeft, TaskEither } from 'fp-ts/TaskEither';

export const unsafeEmail = (value: string): any => {
	return value as any;
};
export const unsafeUsername = (value: string): any => {
	return value as any;
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
