import { EmailType } from '@/core/types/scalar';

export const unsafeEmail = (value: string): EmailType => {
  return value as EmailType
}