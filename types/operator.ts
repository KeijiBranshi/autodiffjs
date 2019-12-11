export type UnaryOperation<S> = (arg: S) =>S;
export type BinaryOperation<S> = (arg0: S, arg1: S) => S;
export type ExternalBinaryOperation<K, S> = (arg0: K, arg1: S) => S;