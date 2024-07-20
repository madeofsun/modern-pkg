import type { Value } from "./lib/value";

export function getValue<T>(arg: T): Value<T> {
  return { arg };
}
