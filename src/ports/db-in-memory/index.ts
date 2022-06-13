import { OutsideRegisterType } from '@/adapters/use-cases/user';

export const registerUserInMemory: OutsideRegisterType = async (data) => (
	{
		email: data.email,
		username: data.username,
		bio: '',
		image: '',
		token: '',
	}
);