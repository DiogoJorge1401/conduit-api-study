
import { mapAll, unsafe } from '@/config/tests/fixtures';
import { CreateUser } from '@/core/user/types';
import { pipe } from 'fp-ts/function';
import { OutsideRegisterUser, registerUser } from './register-user';

const registerOk: OutsideRegisterUser<string> = async (data) => {
	return `user ${data.username} registred successfully`;
};
const registerFail: OutsideRegisterUser<string> = async () => {
	throw new Error('External Error');
};

type FakeUser = {
	username?: string
	email?: string
	password?: string
};

function makeFakeUser (user?: FakeUser): CreateUser {
	return {
		username: unsafe(user?.username ?? 'john'),
		email: unsafe(user?.email ?? 'john@doe.com'),
		password: unsafe(user?.password ?? 'jhon123!'),
	};
}

it('Should register a user correctly', () => {
	const data = makeFakeUser();
	return pipe(
		data,
		registerUser(registerOk),
		mapAll(result => expect(result).toBe(`user ${data.username} registred successfully`)),
	)();
});

it('Should not accept a register from a user with invalid username', () => {
	const data = makeFakeUser({ username: 'a' });
	return pipe(
		data,
		registerUser(registerOk),
		mapAll(error => expect(error).toEqual(new Error('Invalid Slug'))),
	)();
});

it('Should not accept a register from a user with invalid email', () => {
	const data = makeFakeUser({ email: 'invalid-email' });
	return pipe(
		data,
		registerUser(registerOk),
		mapAll(error => expect(error).toEqual(new Error('Invalid Email'))),
	)();
});

it('Should not accept a register from a user with invalid passord', () => {
	const data = makeFakeUser({ password: '12345' });
	return pipe(
		data,
		registerUser(registerOk),
		mapAll(error => expect(error).toEqual(new Error('Password must have at least 8 characters'))),
	)();
});

it('should return a Left if register function throws an errror', () => {
	return pipe(
		makeFakeUser(),
		registerUser(registerFail),
		mapAll(error => expect(error).toEqual(new Error('External Error'))),
	)();
});