import { getMyValue1, getMyValue2 } from "consumer-lib-node10";

export const v1 = getMyValue1();
export const v2 = getMyValue2();

type Assert<T, U> = (<V>() => V extends T ? 1 : 2) extends <V>() => V extends U
  ? 1
  : 2
  ? true
  : false;

const a: any = 0;
const testA: Assert<typeof a, any> = true;

const test1: Assert<typeof v1, any> = false;
const test2: Assert<typeof v2, any> = false;
