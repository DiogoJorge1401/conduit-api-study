import { registerUserInMemory } from '@/ports/db-in-memory';
import { OutsideRegisterType } from '@/adapters/use-cases/user';

export const registerUserInDBAdapter: OutsideRegisterType = (data) => {
	return registerUserInMemory(data);
};