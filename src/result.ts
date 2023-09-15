export type Result<Ok, Err> =
  | {
      ok: true
      result: Ok
    }
  | {
      ok: false
      error: Err
    }

export function ok<T>(result: T): Result<T, never> {
  return {
    ok: true,
    result
  }
}

export function err<T>(error: T): Result<never, T> {
  return {
    ok: false,
    error
  }
}
