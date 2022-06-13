import { OutsideRegisterType } from '@/adapters/use-cases/user';

export const registerUserInMemory: OutsideRegisterType = async (data) => (
	{
		success: true,
		data,
	}
);