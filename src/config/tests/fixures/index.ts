import { Email } from '@/core/types'
import { Either, map as mapE, mapLeft as mapLeftE } from 'fp-ts/Either'
import { pipe } from 'fp-ts/lib/function'
import { map, mapLeft, TaskEither } from 'fp-ts/TaskEither'

export const unsafeEmail = (value: string): Email => {
  return value as Email
}

type CallbackTE = (a: unknown) => unknown

type MapAllTE = (fn: CallbackTE) => (data: TaskEither<unknown, unknown>) => TaskEither<unknown, unknown>

export const mapAllTE: MapAllTE = (fn) => (data) => {
  return pipe(
    data,
    map(fn),
    mapLeft(fn),
  )
}

type CallbackE = (a: unknown) => unknown

type MapAllE = (fn: CallbackE) => (data: Either<unknown, unknown>) => Either<unknown, unknown>

export const mapAllE: MapAllE = (fn) => (data) => {
  return pipe(
    data,
    mapE(fn),
    mapLeftE(fn),
  )
}
