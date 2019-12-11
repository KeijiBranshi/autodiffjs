import { Dual } from "../types/dual";
import { FieldOperations } from "../types/field";

export const createDualSumOperator = <T>(ops: FieldOperations<T>) => (dualA: Dual<T>, dualB: Dual<T>) => ({
  real: ops.sum(dualA.real, dualB.real),
  dual: ops.sum(dualA.dual, dualB.dual)
});

export const createDualDifferenceOperator = <T>(ops: FieldOperations<T>) => (dualA: Dual<T>, dualB: Dual<T>) => ({
  real: ops.diff(dualA.real, dualB.real),
  dual: ops.diff(dualA.dual, dualB.dual)
});

export const createDualProductOperator = <T>(ops: FieldOperations<T>) => (dualA: Dual<T>, dualB: Dual<T>) => ({
  real: ops.prod(dualA.real, dualB.real),
  dual: ops.sum(
    ops.prod(dualA.real, dualB.dual),
    ops.prod(dualA.dual, dualB.real)
  )
});

export const createDualQuotientOperator = <T>(ops: FieldOperations<T>) => (dualA: Dual<T>, dualB: Dual<T>) => ({
  real: ops.quot(dualA.real, dualB.real),
  dual: ops.quot(
    ops.diff(
      ops.prod(dualA.dual, dualB.real),
      ops.prod(dualA.real, dualB.dual)
    ),
    ops.prod(dualB.real, dualB.real)
  )
});
