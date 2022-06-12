import { CreateUser } from '@/core/user/types';
import { toError } from 'fp-ts/Either';
import { TaskEither, tryCatch } from 'fp-ts/TaskEither';

export type OutsideRegister<T> = (data: CreateUser) => Promise<T>;

export type Register = <A>(outsideRegister: OutsideRegister<A>)
  => (data: CreateUser) => TaskEither<Error, A>;

export const register: Register = (outsideRegister) => (data) => {
	return tryCatch(() => outsideRegister(data), toError);
};
