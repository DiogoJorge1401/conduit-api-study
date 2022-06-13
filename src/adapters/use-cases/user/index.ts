import { UserOutput } from '@/core';
import { OutsideRegisterUser, RegisterUser, registerUserUseCase } from '@/core/user/use-cases';

export type OutsideRegisterType = OutsideRegisterUser<UserOutput>;

export const registerUserUseCaseAdapter: RegisterUser = (outsideRegister) => (data) => registerUserUseCase(outsideRegister)(data);