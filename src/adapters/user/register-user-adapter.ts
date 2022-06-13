import { CreateUser } from '@/core';
import { OutsideRegisterUser, registerUser, RegisterUser } from '@/core/user/use-cases';

export type OutsideRegisterResult = OutsideRegisterUser<{
  success: boolean;
  data: CreateUser;
}>;

export const registerUserAdapter: RegisterUser = (outsideRegister) => (data) => registerUser(outsideRegister)(data);