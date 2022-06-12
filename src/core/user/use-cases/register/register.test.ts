import { mapAll, unsafeEmail } from '@/config/tests/fixtures'
import { CreateUser } from '@/core/user/types'
import { pipe } from 'fp-ts/function'
import { OutsideRegister, register } from './register'

const registerOk: OutsideRegister<string> = async (data) => {
  return `user ${data.username} registred successfully`
}

const data: CreateUser = {
  username: 'suegoidkun',
  email: unsafeEmail('sue12@mail.com'),
  password: 'sue1234',
}

it('should register a user successfully', () => {
  return pipe(
    data,
    register(registerOk),
    mapAll(result => expect(result).toBe(`user ${data.username} registred successfully`)),
  )()
})
