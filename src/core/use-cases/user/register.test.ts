import { CreateUser } from '@/core/types/user'
import { pipe } from 'fp-ts/function'
import { map } from 'fp-ts/TaskEither'
import { OutsideRegister, register } from './register'


const registerOk: OutsideRegister<string> = async (data) => {
  return `user ${data.username} registred successfully`
}

const data: CreateUser = {
  username: 'suegoidkun',
  email: 'sue12@mail.com',
  password: 'sue1234',
}

it("should register a user successfully", async () => {
  return pipe(
    data,
    register(registerOk),
    map(result => expect(result).toBe(`user ${data.username} registred successfully`))
  )()
})