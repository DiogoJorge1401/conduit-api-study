import { CreateUser } from '@/core';
import { OutsideRegisterUser, registerUserUseCase, RegisterUser } from '@/core/user/use-cases';

export type OutsideRegisterType = OutsideRegisterUser<{
  success: boolean;
  data: CreateUser;
}>;

export const registerUserUseCaseAdapter: RegisterUser = (outsideRegister) => (data) => registerUserUseCase(outsideRegister)(data);