import type { Value } from "./lib/value.js";

export function getValue<T>(arg: T): Value<T> {
  return { arg };
}
