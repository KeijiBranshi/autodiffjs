import { BinaryOperation } from "./operator";

export type FieldOperations<T> = {
  sum: BinaryOperation<T>,
  diff: BinaryOperation<T>,
  prod: BinaryOperation<T>,
  quot: BinaryOperation<T>
}