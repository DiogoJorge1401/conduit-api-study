import { Email } from '@/core/types'
import { pipe } from 'fp-ts/lib/function'
import { map, mapLeft, TaskEither } from 'fp-ts/TaskEither'

export const unsafeEmail = (value: string): Email => {
  return value as Email
}

type Callback = (a: unknown) => unknown

type MapAll = (fn: Callback) => (data: TaskEither<unknown, unknown>) => TaskEither<unknown, unknown>

export const mapAll: MapAll = (fn) => (data) => {
  return pipe(
    data,
    map(fn),
    mapLeft(fn),
  )
}
