import { UnaryOperation } from "./operator";
import { FieldOperations } from "./field";

export type Dual<T extends FieldOperations<any>> = {
  real: T,
  dual: T
};

export type DualOperator<T> = UnaryOperation<Dual<T>>;